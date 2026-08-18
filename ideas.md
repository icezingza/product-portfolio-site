# แนวคิดออกแบบเว็บไซต์ Product Portfolio Workspace

## ทางเลือกด้านสไตล์

### 1. Archive Ledger
**Very Brief Intro:** พื้นที่ทำงานแบบ editorial archive ที่เปลี่ยนข้อมูลไฟล์ดิบให้ดูเหมือนสมุดบันทึกการลงทุนเชิงสร้างสรรค์ ใช้โครงเส้นตาราง ป้ายสถานะ และสีหมึกเข้มเพื่อสื่อถึงหลักฐานและการตัดสินใจ
**Probability:** 0.07

### 2. Signal Garden
**Very Brief Intro:** ภาษาภาพแบบ organic data landscape ที่ใช้โหนดและกลุ่มสัญญาณเป็นลำดับชั้น ให้ความรู้สึกค้นพบโอกาสจากพอร์ตข้อมูลที่ซับซ้อน
**Probability:** 0.04

### 3. Studio Dossier
**Very Brief Intro:** งานออกแบบแบบ research studio ที่เงียบ สุขุม และเข้มงวด ใช้หน้ากระดาษสีงาช้าง หมึกดำอมเขียว และสีส้มไหม้เป็นสัญญาณการตัดสินใจ
**Probability:** 0.09

## แนวทางที่เลือก: Archive Ledger

### Design Movement
Editorial information design ผสมกับ archival data room และ modern financial-research dashboard ที่ไม่เลียนแบบหน้าจอ SaaS ทั่วไป

### Core Principles
1. หลักฐานต้องนำการตกแต่ง: ทุกองค์ประกอบภาพต้องช่วยอธิบายคะแนน สถานะ หรือขั้นตอนถัดไป
2. โครงสร้างแบบ ledger: เส้น, รหัส, ป้าย, ตัวเลข และ column คือภาษาภาพหลัก
3. ความต่างของน้ำหนัก: หัวเรื่องใหญ่แบบ display หนัก ตัดกับข้อความบรรยายที่อ่านง่ายและระยะหายใจมาก
4. การตัดสินใจมาก่อนความบันเทิง: CTA นำไปสู่การดู Top 30, เอกสารกลยุทธ์ และไฟล์ workspace

### Color Philosophy
พื้นสีงาช้างอมเย็นสื่อถึงเอกสารการทำงานที่จับต้องได้; หมึกเขียวเกือบดำสื่อถึงความน่าเชื่อถือ; สีส้มไหม้ใช้เฉพาะจุดเพื่อสื่อ “ต้องลงมือ”; สีม่วงหม่นใช้สำหรับความเสี่ยงและ metadata. หลีกเลี่ยง gradient สีม่วงแบบทั่วไปและไม่ใช้ neon.

### Layout Paradigm
หน้าหลักเป็น vertical dossier ที่เปิดด้วย hero แบบ split asymmetry จากนั้นไหลสู่แถบ KPI, corridor ของกลุ่มข้อเสนอ, decision ledger สำหรับ Top 30 และ action panel แบบด้านข้าง. บน desktop จะมี rail navigation แบบ sticky; บนมือถือเปลี่ยนเป็น compact header.

### Signature Elements
1. รหัส section แบบ `01/05`, `02/05` ที่พิมพ์แบบ monospace.
2. เส้น ledger บางและ data stamps สีส้มไหม้.
3. กล่อง “evidence note” ที่ย้ำว่า score คือการจัดลำดับ ไม่ใช่คำรับรองยอดขาย.

### Interaction Philosophy
การค้นหาและ filter ต้องตอบสนองทันที; การขยายรายละเอียดต้องใช้ motion สั้นและไม่รบกวนการอ่าน. ผู้ใช้ต้องกลับไปที่ภาพรวมและทางออกสู่ไฟล์ดาวน์โหลดได้เสมอ.

### Animation
ใช้ transition ที่ transform/opacity เท่านั้น: card hover 160ms, panel reveal 220ms, counter/deliberate entrances ไม่เกิน 260ms. ปิด animation เมื่อ `prefers-reduced-motion`.

### Typography System
ใช้ `Space Grotesk` สำหรับหัวเรื่องและตัวเลข/metadata สำคัญ, `Noto Sans Thai` สำหรับภาษาไทยและข้อความอธิบาย. หัวเรื่องใช้ 700–800, body ใช้ 400–500, metadata ใช้ 600 แบบ monospace letter-spaced.

### Brand Essence
**Product Portfolio Workspace คือ data room สำหรับเปลี่ยนไฟล์ดิบที่มีศักยภาพให้กลายเป็นข้อเสนอที่ตรวจสอบและพัฒนาต่อได้** — rigorous, candid, actionable.

### Brand Voice
น้ำเสียงตรงไปตรงมา มีหลักฐาน ไม่โอ้อวด และชัดว่าต้องทำอะไรต่อ. ตัวอย่าง: “ศักยภาพสูง ไม่ได้แปลว่าพร้อมรับเงิน” และ “เริ่มจากหลักฐานที่รันได้ แล้วค่อยขยายเป็นข้อเสนอที่ buyer เข้าใจ”.

### Wordmark & Logo
เครื่องหมายเป็นวงเล็บเหลี่ยมเปิดคู่กับเส้นบันทึกข้อมูลสั้น ๆ สื่อถึง “รายการที่จัดระเบียบแล้ว” ไม่ใช้ตัวชื่อแบรนด์เป็นโลโก้เพียงอย่างเดียว.

### Signature Brand Color
**Ledger Orange — `#D05A2A`** ใช้เฉพาะ priority marks, key CTA, และ actionable decision states.

## Style Decisions

- เว็บไซต์ใช้ภาษาไทยเป็นหลัก แต่คงคำศัพท์เทคนิคภาษาอังกฤษเมื่อช่วยให้ค้นหาและตัดสินใจชัดขึ้น.
- หน้าหลักต้องใช้ข้อมูลจริงจากการวิเคราะห์ 108 ไฟล์และ Top 30 เท่านั้น; ไม่มี testimonials, ratings หรือยอดขายจำลอง.
- Asset ภาพสร้างขึ้นใหม่ใช้เพื่อ hero/brand atmosphere เท่านั้น ไม่ใช้แทน chart หรือหลักฐานเชิงตัวเลข.
- หัวเรื่องใหญ่ใช้ภาษาไทยเป็นหลัก; อังกฤษทำหน้าที่เป็น metadata, technical terminology และ operational label.
- เครื่องหมาย bracket-plus-ledger-line ต้องปรากฏซ้ำใน rail, section index, evidence stamp และ CTA ไม่ใช่เพียงโลโก้ส่วนหัว.
- ภาพประกอบต้องทำหน้าที่เป็น archive evidence ผ่าน overlay ของ file reference, dossier tab และ decision trace ไม่ใช้เป็น dark-tech background เฉย ๆ.
- สี Plum ใช้เป็นภาษารองสำหรับ risk และ metadata ส่วน Ledger Orange ใช้เฉพาะ decision/action signal.
