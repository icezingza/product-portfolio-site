/** Archive Ledger page: Thai-first dossier layout for verified raw-file readiness data. */
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  FileSearch,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ScoreTable } from "@/components/ScoreTable";

const ZIP_URL = "/manus-storage/product-portfolio_ide_workspace_8a740f9e.zip";
const HERO = "/manus-storage/portfolio-ledger-hero_0efc018d.jpg";
const SIGNAL = "/manus-storage/portfolio-signal-art_2bb9b912.jpg";
const TEXTURE = "/manus-storage/portfolio-evidence-texture_aba68466.jpg";
const MARK = "/manus-storage/portfolio-ledger-mark_c599bfd7.png";

const offers = [
  { code: "01", name: "A/B Testing Starter", note: "Quick-win developer offer", proof: "6 focused tests passed", action: "จัด repo, license และ checkout ก่อน listing" },
  { code: "02", name: "Developer Reliability Suite", note: "B2B bundle in audit", proof: "security / resilience / observability", action: "รวม source ที่ผ่าน review และเพิ่ม integration tests" },
  { code: "03", name: "Security Middleware", note: "Reference pack + services", proof: "5 focused tests passed", action: "คง limitation, audit crypto/auth และเลือก license" },
  { code: "04", name: "Reality Fusion", note: "Producer-facing IP package", proof: "deck, bible, one-pager, outline", action: "ตรวจสิทธิ์และจัด canonical pitch package" },
];

function BrandMotif({ small = false }: { small?: boolean }) {
  return <span className={`brand-mark ${small ? "scale-[0.65] origin-left" : ""}`} aria-hidden="true" />;
}

export default function Home() {
  return (
    <div className="ledger-shell min-h-screen bg-[var(--paper)]">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#172b2a]/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3">
            <BrandMotif />
            <img src={MARK} alt="Product Portfolio mark" className="hidden h-8 w-8 object-contain sm:block" />
            <span className="display text-sm font-bold tracking-tight">PRODUCT PORTFOLIO<br /><span className="font-medium text-white/60">WORKSPACE / ARCHIVE 01</span></span>
          </a>
          <nav className="hidden gap-6 text-sm text-white/75 md:flex">
            <a href="#offers" className="transition hover:text-white">ข้อเสนอ</a>
            <a href="#inventory" className="transition hover:text-white">Ledger</a>
            <a href="#next" className="transition hover:text-white">เริ่มต้น</a>
          </nav>
          <a href={ZIP_URL} className="flex items-center gap-2 border border-white/25 px-3 py-2 text-xs font-semibold transition hover:bg-white hover:text-[var(--ink)]"><Download size={14} /> IDE workspace</a>
        </div>
      </header>

      <aside className="fixed left-5 top-[42%] z-20 hidden -translate-y-1/2 lg:block">
        <div className="dossier-stamp w-24 px-3 py-4 text-white">
          <BrandMotif small />
          <p className="mt-2 text-[0.6rem] font-bold tracking-[0.14em] text-[#ffc48f]">INDEX</p>
          <div className="mt-4 space-y-3 text-[0.65rem] font-semibold text-white/65">
            <a className="rail-link block pl-2" href="#offers">01 OFFER</a>
            <a className="rail-link block pl-2" href="#inventory">04 LEDGER</a>
            <a className="rail-link block pl-2" href="#next">05 START</a>
          </div>
        </div>
      </aside>

      <main id="top">
        <section className="relative min-h-[690px] bg-[#172b2a] px-5 py-12 text-white sm:px-8 lg:px-12">
          <img src={HERO} alt="Abstract archival ledger" className="absolute inset-0 h-full w-full object-cover opacity-65" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102220]/95 via-[#102220]/75 to-[#102220]/15" />
          <div className="relative mx-auto grid min-h-[590px] max-w-[1440px] items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="enter max-w-3xl">
              <div className="dossier-stamp inline-flex items-center gap-3 px-3 py-2"><BrandMotif small /><p className="caps text-[#ffc48f]">CASE FILE / PPW-108 / 2026</p></div>
              <h1 className="display mt-6 text-5xl font-bold leading-[0.93] tracking-[-0.055em] sm:text-7xl lg:text-8xl">เปลี่ยนไฟล์ดิบ<br />ให้เป็น <span className="text-[#ffc48f]">ข้อเสนอ</span><br />ที่ตรวจสอบได้</h1>
              <p className="mt-5 text-sm font-semibold tracking-[0.08em] text-white/45">RAW FILES → EVIDENCE → COMMERCIAL MOVE</p>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/75 sm:text-lg">พื้นที่ตัดสินใจสำหรับพอร์ตไฟล์ดิบ: ดูหลักฐานจริง จัดลำดับความพร้อม และเลือกแพ็กเกจที่ควรพัฒนาต่อก่อนเปิดขาย</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#inventory" className="flex items-center gap-2 bg-[var(--ledger)] px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#e26a37] active:scale-[0.97]">เปิด Decision ledger <ArrowDownRight size={17} /></a>
                <a href="#offers" className="flex items-center gap-2 border border-white/35 px-5 py-3 font-semibold text-white transition hover:bg-white/10 active:scale-[0.97]">ดู 4 ข้อเสนอหลัก <ArrowDownRight size={17} /></a>
              </div>
            </div>
            <div className="enter-delay border-t border-white/30 pt-5 lg:mb-4">
              <div className="grid grid-cols-3 gap-5">
                <div><p className="caps text-white/45">files</p><p className="display mt-2 text-4xl font-bold">108</p><p className="mt-1 text-xs leading-5 text-white/60">ไฟล์ดิบที่ประเมิน</p></div>
                <div><p className="caps text-white/45">high signal</p><p className="display mt-2 text-4xl font-bold">30</p><p className="mt-1 text-xs leading-5 text-white/60">ศักยภาพสูงหลังจัดแพ็ก</p></div>
                <div><p className="caps text-white/45">ready now</p><p className="display mt-2 text-4xl font-bold">0</p><p className="mt-1 text-xs leading-5 text-white/60">รายการที่ยืนยัน order-ready</p></div>
              </div>
              <p className="mt-8 border-l-2 border-[var(--ledger)] pl-4 text-sm leading-7 text-white/70">“ศักยภาพสูง ไม่ได้แปลว่าพร้อมรับเงิน” — ทุกรายการต้องผ่านสิทธิ์, การส่งมอบ, claim และช่องทางรับชำระก่อนเปิดขาย</p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div><div className="section-id">[ 01 / 05 ]</div><h2 className="display mt-3 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">หนึ่ง inventory.<br />สี่ทางเลือกเชิงพาณิชย์.</h2><p className="mt-3 text-xs font-semibold tracking-[0.1em] metadata-plum">OFFER ARCHITECTURE</p></div>
              <p className="max-w-2xl self-end text-base leading-8 text-[var(--ink-soft)]">Top 30 ไม่ควรถูกเปิดเป็น 30 listings กระจัดกระจาย แต่ควรถูกรวมเป็นข้อเสนอที่ buyer เข้าใจได้ มีขอบเขตชัด และพัฒนา proof ได้ตามลำดับ</p>
            </div>
            <div className="mt-12 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
              {offers.map((offer) => <article key={offer.code} className="group bg-[var(--paper)] p-6 transition hover:bg-[#fffaf1]">
                <div className="flex items-start justify-between"><span className="section-id">[ {offer.code} ]</span><ArrowUpRight size={18} className="text-[var(--ledger)] transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
                <h3 className="display mt-10 text-2xl font-bold tracking-[-0.03em]">{offer.name}</h3>
                <p className="mt-2 text-sm font-semibold text-[var(--plum)]">{offer.note}</p>
                <div className="my-5 ink-rule" />
                <p className="text-sm text-[var(--ink-soft)]"><span className="font-semibold text-[var(--ink)]">หลักฐาน:</span> {offer.proof}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]"><span className="font-semibold text-[var(--ink)]">ถัดไป:</span> {offer.action}</p>
              </article>)}
            </div>
          </div>
        </section>

        <section id="offers" className="bg-[#e8e0d2] px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div><div className="section-id">[ 02 / 05 ]</div><h2 className="display mt-3 text-4xl font-bold tracking-[-0.045em] text-[var(--ink)] sm:text-5xl">จากหลักฐาน<br />สู่ข้อเสนอที่ buyer<br />เข้าใจทันที</h2><p className="mt-3 text-xs font-semibold tracking-[0.1em] metadata-plum">COMMERCIAL OPERATING MODEL</p><p className="mt-6 max-w-md text-base leading-8 text-[var(--ink-soft)]">Developer assets, Security reference และ Creative IP ถูกแยกวิธีขายและความเสี่ยงออกจากกัน เพื่อให้การตัดสินใจเรื่องราคาและช่องทางไม่หลงไปกับชื่อไฟล์</p><a href="#inventory" className="mt-8 inline-flex items-center gap-2 border-b-2 border-[var(--ledger)] pb-2 text-sm font-bold text-[var(--ink)]">ตรวจดูข้อมูลต้นทาง <ArrowDownRight size={16} /></a></div>
            <div className="relative min-h-[360px] overflow-hidden bg-[#172b2a]"><img src={SIGNAL} alt="Conceptual flow from raw records to commercial packages" className="h-full w-full object-cover opacity-85" /><div className="absolute left-5 top-5 dossier-stamp px-3 py-2 text-white"><p className="caps text-[#ffc48f]">EVIDENCE TRACE</p><p className="mt-1 text-[0.7rem] text-white/65">RAW → PACKAGE → BUYER</p></div><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#172b2a] to-transparent p-7 text-white"><p className="caps text-[#ffc48f]">Commercial operating model</p><p className="mt-2 max-w-md text-base leading-7 text-white/80">เริ่มจากไฟล์ที่พิสูจน์ได้ → จัดแพ็กตาม buyer → ตั้ง claim boundary → เพิ่ม delivery, support และ checkout</p></div></div>
          </div>
        </section>

        <section className="relative bg-[var(--paper)] px-5 py-20 sm:px-8 lg:px-12">
          <img src={TEXTURE} alt="Paper ledger texture" className="absolute inset-0 h-full w-full object-cover opacity-[0.14]" />
          <div className="relative mx-auto max-w-[1440px]">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div><div className="section-id">[ 03 / 05 ]</div><h2 className="display mt-3 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">ความพร้อมขาย<br />เป็นห่วงโซ่<br />ไม่ใช่ตัวเลข</h2></div>
              <div className="grid gap-0 border-t border-[var(--line)] sm:grid-cols-3">
                <div className="border-b border-[var(--line)] py-6 sm:border-r sm:pr-6"><FileSearch className="text-[var(--ledger)]" /><h3 className="display mt-7 text-xl font-bold">Asset-ready</h3><p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">มี source, document หรือ artifact ที่พอตรวจสอบคุณค่าได้</p></div>
                <div className="border-b border-[var(--line)] py-6 sm:border-r sm:px-6"><Layers3 className="text-[var(--ledger)]" /><h3 className="display mt-7 text-xl font-bold">Listing-ready</h3><p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">มี buyer, price hypothesis, license, preview และข้อความขายที่ไม่เกินหลักฐาน</p></div>
                <div className="border-b border-[var(--line)] py-6 sm:pl-6"><ShieldCheck className="text-[var(--ledger)]" /><h3 className="display mt-7 text-xl font-bold">Order-ready</h3><p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">มี checkout, delivery, support/refund boundary และ claim gate ครบ</p></div>
              </div>
            </div>
          </div>
        </section>

        <ScoreTable />

        <section id="next" className="bg-[#172b2a] px-5 py-20 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_0.85fr]">
            <div><div className="section-id text-[#ffc48f]">[ 05 / 05 ]</div><h2 className="display mt-3 text-4xl font-bold tracking-[-0.045em] sm:text-6xl">เริ่มจากหลักฐาน<br />ที่รันได้จริง</h2><p className="mt-3 text-xs font-semibold tracking-[0.1em] text-white/40">IDE WORKSPACE / CLEAN WORKING COPY</p><p className="mt-6 max-w-xl text-base leading-8 text-white/70">ดาวน์โหลด IDE workspace เพื่อเริ่มตรวจและพัฒนาชุด A/B Testing และ Security Middleware จากไฟล์ที่จัดโครงสร้างแล้ว โดยยังคง archive ดิบไว้แยกเป็นหลักฐาน</p></div>
            <div className="border-t border-white/25 pt-6 lg:self-end"><div className="flex items-center gap-3"><Sparkles className="text-[#ffc48f]" /><p className="text-sm leading-6 text-white/70">Security Middleware ผ่าน focused tests 5 รายการ และ A/B Testing ผ่าน 6 รายการใน isolated environment; นี่เป็น functional evidence ไม่ใช่ security certification.</p></div><a href={ZIP_URL} className="mt-7 flex w-fit items-center gap-2 bg-[var(--ledger)] px-5 py-3 font-semibold transition hover:-translate-y-0.5 hover:bg-[#e26a37] active:scale-[0.97]"><BrandMotif small /> ดาวน์โหลด IDE workspace <ArrowDownRight size={17} /></a></div>
          </div>
        </section>
      </main>
      <footer className="bg-[#102220] px-5 py-6 text-xs text-white/50 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3"><span>Product Portfolio Workspace — analysis-led portfolio system</span><span>108 files assessed · 30 high-potential signals</span></div></footer>
    </div>
  );
}
