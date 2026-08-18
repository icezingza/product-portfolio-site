/** Archive Ledger table: exposes the verified 108-file score inventory without fabricated fields. */
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

type ScoreRow = { id: number; product: string; rawFile: string; potential: number; sellable: number; tier: string; risk: string };
const DATA_URL = "/manus-storage/raw_file_sellability_scores_1e3ef07d.csv";

const classify = (file: string) => {
  const lower = file.toLowerCase();
  if (lower.includes("realityfusion")) return "Creative IP / pitch";
  if (lower.includes("security")) return "Security reference";
  if (lower.includes("docker") || lower.includes("kubernetes") || lower.includes("prometheus")) return "DevOps template";
  if (lower.includes("ab_testing")) return "Experimentation";
  if (lower.includes("core.py")) return "Developer starter";
  return "Reference asset";
};

function parseRows(csv: string): ScoreRow[] {
  return csv.trim().split(/\r?\n/).slice(1).map((line, id) => {
    const cell = line.split(",");
    return { id, product: cell[0] ?? "unknown", rawFile: cell[1] ?? "", potential: Number(cell[2]), sellable: Number(cell[3]), tier: cell[4] ?? "", risk: cell[5] ?? "" };
  }).filter((row) => Number.isFinite(row.potential) && Number.isFinite(row.sellable));
}

export function ScoreTable() {
  const [rows, setRows] = useState<ScoreRow[]>([]);
  const [query, setQuery] = useState("");
  const [tier, setTier] = useState("ทั้งหมด");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => { fetch(DATA_URL).then((r) => r.text()).then((raw) => setRows(parseRows(raw))).catch(() => setRows([])); }, []);
  const filtered = useMemo(() => rows.filter((row) => {
    const target = `${row.product} ${row.rawFile} ${classify(row.rawFile)}`.toLowerCase();
    return (tier === "ทั้งหมด" || row.tier === tier) && target.includes(query.toLowerCase());
  }), [rows, query, tier]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const shown = filtered.slice((page - 1) * pageSize, page * pageSize);
  const changeTier = (value: string) => { setTier(value); setPage(1); };

  return <section id="inventory" className="bg-[#f6f2e9] px-5 py-20 sm:px-8 lg:px-12">
    <div className="mx-auto max-w-[1380px]">
      <div className="grid gap-8 border-b border-[var(--line)] pb-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div><div className="section-id">[ 04 / 05 ]</div><h2 className="display mt-3 text-4xl font-bold tracking-[-0.04em] text-[var(--ink)] sm:text-5xl">Ledger สำหรับ<br/>ไฟล์ดิบทั้งหมด</h2><p className="mt-3 text-xs font-semibold tracking-[0.1em] metadata-plum">RAW INVENTORY / VERIFIED SCORE VIEW</p></div>
        <p className="self-end text-base leading-8 text-[var(--ink-soft)]">ตารางนี้อ่านชุดข้อมูลคะแนนจริง 108 รายการจากการวิเคราะห์ไฟล์ดิบ ใช้เพื่อค้นหาและจัดลำดับการทำงาน ไม่ใช่คำรับรองการขายหรือการรับรองด้านความปลอดภัย</p>
      </div>
      <div className="mt-7 grid gap-3 md:grid-cols-[1fr_190px]">
        <label className="flex items-center gap-3 border border-[var(--line)] bg-white px-4 py-3"><Search size={18} className="text-[var(--ledger)]"/><input aria-label="ค้นหารายการ" value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} placeholder="ค้นหาชื่อโปรดักต์ ไฟล์ หรือประเภท asset" className="w-full bg-transparent text-sm outline-none placeholder:text-[#8e8980]" /></label>
        <select aria-label="กรองระดับศักยภาพ" value={tier} onChange={(e) => changeTier(e.target.value)} className="border border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none"><option>ทั้งหมด</option><option>สูง</option><option>กลาง</option><option>ต่ำ</option></select>
      </div>
      <div className="mt-5 overflow-x-auto border border-[var(--line)] bg-white">
        <table className="min-w-[820px] w-full border-collapse text-left text-sm"><thead className="bg-[#edf0ea] text-[0.7rem] uppercase tracking-[0.12em] text-[var(--ink-soft)]"><tr><th className="px-4 py-4">อันดับ</th><th className="px-4 py-4">ไฟล์ / โปรดักต์</th><th className="px-4 py-4">รูปแบบ</th><th className="px-4 py-4">ศักยภาพ</th><th className="px-4 py-4">ขายตามสภาพ</th><th className="px-4 py-4">ความเสี่ยง</th></tr></thead>
          <tbody>{shown.map((row, index) => <tr key={row.id} className="border-t border-[var(--line)] align-top transition-colors hover:bg-[#fff9ef]"><td className="px-4 py-5 font-semibold text-[var(--ledger)]">{(page - 1) * pageSize + index + 1}</td><td className="px-4 py-5"><p className="font-semibold text-[var(--ink)]">{row.product.replaceAll("_", " ")}</p><p className="mt-1 max-w-[380px] break-words font-mono text-[0.68rem] leading-5 text-[#726d64]">{row.rawFile}</p></td><td className="px-4 py-5 text-[var(--ink-soft)]">{classify(row.rawFile)}<p className="mt-2 text-[0.65rem] font-bold tracking-[0.08em] metadata-plum">TIER / {row.tier || "—"}</p></td><td className="px-4 py-5"><span className="font-bold text-[var(--ink)]">{row.potential}</span><div className="mt-2 h-1.5 w-24 bg-[#e3ded4]"><div className="h-full bg-[var(--ink)]" style={{ width: `${row.potential}%` }} /></div></td><td className="px-4 py-5"><span className="font-bold text-[var(--ink)]">{row.sellable}</span></td><td className="px-4 py-5"><span className={row.risk === "ต่ำ" ? "border border-[#98b6a6] px-2 py-1 text-xs text-[#285440]" : "border border-[var(--plum)] px-2 py-1 text-xs text-[var(--plum)]"}>{row.risk || "ไม่ระบุ"}</span></td></tr>)}</tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-[var(--ink-soft)]"><span>แสดง {filtered.length ? (page - 1) * pageSize + 1 : 0}–{Math.min(page * pageSize, filtered.length)} จาก {filtered.length} รายการ</span><div className="flex gap-2"><button onClick={() => setPage((v) => Math.max(1, v - 1))} disabled={page === 1} className="border border-[var(--line)] p-2 disabled:opacity-30"><ChevronLeft size={16}/></button><span className="px-2 py-2">{page} / {totalPages}</span><button onClick={() => setPage((v) => Math.min(totalPages, v + 1))} disabled={page === totalPages} className="border border-[var(--line)] p-2 disabled:opacity-30"><ChevronRight size={16}/></button></div></div>
    </div>
  </section>;
}
