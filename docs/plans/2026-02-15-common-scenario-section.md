# Common Scenario Section Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the "業務の始まりから～" steps-section with v2.pdf page 9's "こんな場面ありますよね？" common scenario section, matching both content and visual design.

**Architecture:** Replace HTML section (index.html lines 242-325) and corresponding CSS (style.css lines 1995-2095) with new scenario card grid. Cards use flexbox wrap layout (no horizontal scroll) with dark navy headers and Font Awesome icons.

**Tech Stack:** HTML5, CSS3 (flexbox), Font Awesome 6.5.1 (already loaded)

---

### Task 1: Replace HTML — steps-section to scenario-section

**Files:**
- Modify: `index.html:242-325`

**Step 1: Replace the section HTML**

Replace the entire `<section class="steps-section">...</section>` block (lines 242-325) with:

```html
      <section class="scenario-section" data-aos="fade">
        <div class="inner-block">
          <div class="scenario-top-line"></div>
          <div class="scenario-header">
            <div class="scenario-header-text">
              <p class="scenario-label">COMMON SCENARIO</p>
              <h2 class="scenario-ttl">こんな場面ありますよね？</h2>
            </div>
          </div>

          <div class="scenario-grid">
            <div class="scenario-card" data-aos="fade-up" data-aos-delay="0">
              <div class="scenario-card-header">
                <span class="scenario-num">1</span>
              </div>
              <div class="scenario-card-body">
                <p class="scenario-card-txt">Excelからシステムへ貼り付ける際に1行ズレる</p>
              </div>
              <div class="scenario-card-icon">
                <i class="fas fa-table"></i>
              </div>
            </div>

            <div class="scenario-card" data-aos="fade-up" data-aos-delay="50">
              <div class="scenario-card-header">
                <span class="scenario-num">2</span>
              </div>
              <div class="scenario-card-body">
                <p class="scenario-card-txt">数字の打ち間違い（例：100,000→10,000）</p>
              </div>
              <div class="scenario-card-icon">
                <i class="fas fa-keyboard"></i>
              </div>
            </div>

            <div class="scenario-card" data-aos="fade-up" data-aos-delay="100">
              <div class="scenario-card-header">
                <span class="scenario-num">3</span>
              </div>
              <div class="scenario-card-body">
                <p class="scenario-card-txt">金額を入力する際に税抜/税込を勘違い</p>
              </div>
              <div class="scenario-card-icon">
                <i class="fas fa-yen-sign"></i>
              </div>
            </div>

            <div class="scenario-card" data-aos="fade-up" data-aos-delay="150">
              <div class="scenario-card-header">
                <span class="scenario-num">4</span>
              </div>
              <div class="scenario-card-body">
                <p class="scenario-card-txt">電話番号のハイフン位置がバラバラ</p>
              </div>
              <div class="scenario-card-icon">
                <i class="fas fa-phone"></i>
              </div>
            </div>

            <div class="scenario-card" data-aos="fade-up" data-aos-delay="200">
              <div class="scenario-card-header">
                <span class="scenario-num">5</span>
              </div>
              <div class="scenario-card-body">
                <p class="scenario-card-txt">最新ファイルだと思って開いたら古いバージョンだった</p>
              </div>
              <div class="scenario-card-icon">
                <i class="fas fa-file-circle-xmark"></i>
              </div>
            </div>

            <div class="scenario-card" data-aos="fade-up" data-aos-delay="250">
              <div class="scenario-card-header">
                <span class="scenario-num">6</span>
              </div>
              <div class="scenario-card-body">
                <p class="scenario-card-txt">チャットで送られた情報を手入力で転記して誤字</p>
              </div>
              <div class="scenario-card-icon">
                <i class="fas fa-comment-dots"></i>
              </div>
            </div>

            <div class="scenario-card" data-aos="fade-up" data-aos-delay="300">
              <div class="scenario-card-header">
                <span class="scenario-num">7</span>
              </div>
              <div class="scenario-card-body">
                <p class="scenario-card-txt">口頭で聞いた数値を聞き間違える</p>
              </div>
              <div class="scenario-card-icon">
                <i class="fas fa-ear-listen"></i>
              </div>
            </div>
          </div>

          <p class="scenario-footer">
            <i class="fas fa-triangle-exclamation"></i>
            転記ミス・入力ミス・勘違い etc...
            <span class="scenario-footer-highlight">人間はミスをする生き物</span>
          </p>
        </div>
      </section>
```

**Step 2: Verify HTML structure**

Open `index.html` in browser. Section should render (unstyled) between the 2nd CTA and the 3rd CTA. Confirm 7 cards appear with text and icons.

---

### Task 2: Replace CSS — steps styles to scenario styles

**Files:**
- Modify: `assets/css/style.css:1995-2095`

**Step 1: Replace the CSS block**

Replace the entire `/* MCPon Business Steps */` block (lines 1995-2095, including the `@media` block) with:

```css
/* ============================
   Common Scenario Cards
   ============================ */
.scenario-section {
  padding: 80px 0;
  background: #fff;
}
.scenario-top-line {
  height: 4px;
  background: linear-gradient(90deg, var(--aion-blue) 0%, var(--aion-blue) 40%, var(--aion-purple) 40%, var(--aion-purple) 70%, var(--aion-pink) 70%, var(--aion-pink) 100%);
  border-radius: 2px;
  margin-bottom: 32px;
}
.scenario-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
}
.scenario-label {
  font-size: 14px;
  font-weight: 700;
  color: var(--aion-pink);
  letter-spacing: 0.1em;
  margin-bottom: 8px;
}
.scenario-ttl {
  font-size: 28px;
  font-weight: 900;
  color: var(--aion-text);
  line-height: 1.4;
}
.scenario-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 40px;
}
.scenario-card {
  flex: 1 1 calc(14.28% - 12px);
  min-width: 140px;
  max-width: 180px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  transition: transform 0.3s, box-shadow 0.3s;
}
.scenario-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}
.scenario-card-header {
  background: #1a1a4e;
  padding: 10px 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.scenario-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  color: #fff;
  font-size: 16px;
  font-weight: 900;
}
.scenario-card-body {
  padding: 16px 12px 12px;
  min-height: 80px;
}
.scenario-card-txt {
  font-size: 13px;
  line-height: 1.6;
  color: var(--aion-text);
}
.scenario-card-icon {
  padding: 8px 12px 16px;
  text-align: center;
  font-size: 28px;
  color: #b0b8c8;
  opacity: 0.5;
}
.scenario-footer {
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: var(--aion-text);
  margin-top: 8px;
}
.scenario-footer i {
  color: #f59e0b;
  margin-right: 8px;
}
.scenario-footer-highlight {
  color: var(--aion-pink);
}

@media screen and (max-width: 1024px) {
  .scenario-card {
    flex: 1 1 calc(25% - 12px);
    max-width: none;
  }
}
@media screen and (max-width: 768px) {
  .scenario-ttl { font-size: 22px; }
  .scenario-card {
    flex: 1 1 calc(50% - 12px);
    max-width: none;
  }
}
```

**Step 2: Verify in browser**

Reload `index.html`. Verify:
- Top gradient line (blue | purple | pink) appears
- "COMMON SCENARIO" label in pink
- "こんな場面ありますよね？" title in bold
- 7 cards in horizontal row on desktop, wrapping on resize
- Dark navy headers with white number badges (right-aligned)
- Warning footer with yellow triangle icon and pink highlight text
- No horizontal scroll at any viewport width

---

### Task 3: Visual QA — compare with PDF

**Step 1: Side-by-side comparison**

Open the site and v2.pdf page 9 side-by-side. Check:
- Card layout matches PDF structure (7 horizontal cards)
- Navy header color is close to PDF's dark blue
- Number badge positioning (right side of header)
- Text content matches all 7 scenarios exactly
- Footer warning text matches PDF

**Step 2: Responsive check**

Resize browser to verify:
- 1024px+: 7 cards in one row (or wrapping to 2 rows if needed)
- 769-1024px: ~4 cards per row
- ~768px: 2 cards per row
- No horizontal scrollbar at any width

**Step 3: Commit**

```bash
git add index.html assets/css/style.css
git commit -m "feat: replace steps-section with common scenario cards per v2.pdf p9"
```
