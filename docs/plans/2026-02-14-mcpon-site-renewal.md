# MCPon Site Renewal Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** AutoDateクローンサイトをMCPonサービス紹介サイトにリニューアルする（19セクション構成、service.docx準拠）

**Architecture:** 既存の`index.html`と`assets/css/style.css`を段階的に置換。AutoDateの構造（jQuery + Splide + AOS）を活かし、コンテンツとカラーをMCPon/AIONブランドに差し替える。新規セクション用CSSは`style.css`末尾に追記。

**Tech Stack:** HTML5, CSS3, jQuery 3.6.3, Splide.js (スライダー), AOS.js (スクロールアニメーション), Font Awesome 6 (アイコン)

**Design Doc:** `docs/plans/2026-02-14-mcpon-site-renewal-design.md`

**Key Files:**
- `index.html` (L1-1461): メインHTML - 全セクション書き換え
- `assets/css/style.css`: メインCSS - カラー置換 + 新規CSS追記
- `assets/js/common.js`: JS - Splide初期化等の調整

**AION Brand Colors:**
- Pink: `#D14A76` / Purple: `#422C81` / Blue: `#5B8CC3` / SecondaryBlue: `#467EB5`
- Gradient: `linear-gradient(135deg, #D14A76, #422C81, #5B8CC3)`
- Text: `#333333` / BG: `#FFFFFF` / BG-sub: `#F9F9F9`

---

## Phase 1: Foundation (head, CSS variables, Font Awesome)

### Task 1: Update `<head>` metadata and add Font Awesome

**Files:**
- Modify: `index.html:1-84` (head section)

**Step 1: Replace head content**

`index.html`の`<head>`内を以下の通り変更:

1. `<title>` を `MCPon | AIエージェントで業務を丸ごと自動化` に変更 (L25)
2. `<meta name="description">` を MCPon用に変更 (L27)
3. OGP情報を MCPon用に変更 (L29-35)
4. GTMタグ(L6-17)を削除またはコメントアウト（自社GTMに後で差し替え）
5. WordPress関連タグ(L43-82)を削除
6. Font Awesome CDNを追加:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```
7. `<body>`内のGTM noscript (L89-98)も削除

**Step 2: Verify** - ブラウザでindex.htmlを開き、Font Awesomeアイコンが読み込まれることを確認

---

### Task 2: CSS Color System - AutoDate colors to AION colors

**Files:**
- Modify: `assets/css/style.css`

**Step 1: CSS変数定義を`style.css`先頭（resetブロック前）に追加**

```css
:root {
  --aion-pink: #D14A76;
  --aion-purple: #422C81;
  --aion-blue: #5B8CC3;
  --aion-blue-secondary: #467EB5;
  --aion-gradient: linear-gradient(135deg, #D14A76, #422C81, #5B8CC3);
  --aion-gradient-light: linear-gradient(135deg, rgba(209,74,118,0.08), rgba(66,44,129,0.05), rgba(91,140,195,0.08));
  --aion-text: #333333;
  --aion-bg: #FFFFFF;
  --aion-bg-sub: #F9F9F9;
}
```

**Step 2: style.css内のAutoDate系カラーを一括置換**

AutoDateはイエロー/オレンジ系のアクセントカラーを使用している。以下のパターンを検索して置換:
- `primary`クラスで使用されている色 → `var(--aion-blue)` または `var(--aion-gradient)`
- ボタンの背景色 → AIONグラデーション
- リンクホバー色 → `var(--aion-blue)`

**Step 3: Verify** - ブラウザで色が切り替わっていることを確認

---

## Phase 2: Header + Footer

### Task 3: Header - AutoDate → MCPon

**Files:**
- Modify: `index.html:101-113`

**Step 1: Replace header HTML**

```html
<header>
  <div id="header" class="c-header">
    <div class="logo-area">
      <img src="MCPon文字ロゴ.png" alt="MCPon" style="height: 36px;">
    </div>
    <div class="toform-area pc">
      <a href="#contact-section" class="c-btn01 primary small">
        <span class="inn-txt">無料で相談する</span>
      </a>
    </div>
  </div>
</header>
```

**Step 2: Verify** - ヘッダーにMCPonロゴが表示されること

---

### Task 4: Footer - Marsdy → AION

**Files:**
- Modify: `index.html:1415-1449`

**Step 1: Replace footer HTML**

```html
<footer>
  <div id="footer" class="c-footer">
    <div class="inner-block">
      <div class="img-area">
        <img src="MCPon文字ロゴ.png" alt="MCPon" style="height: 40px;">
      </div>
      <div class="link-area">
        <a href="#" target="_blank">
          <span class="inn-txt">プライバシーポリシー</span>
          <img src="assets/img/ico-external.svg" alt="">
        </a>
        <a href="#" target="_blank">
          <span class="inn-txt">運営会社</span>
          <img src="assets/img/ico-external.svg" alt="">
        </a>
      </div>
      <small>&copy; AION inc. All rights reserved.</small>
    </div>
  </div>
</footer>
```

**Step 2: footerのWordPress関連スクリプト(L1436-1448)を削除**

**Step 3: Verify** - フッターにMCPonロゴとAION表記が表示されること

---

## Phase 3: Hero Section (Section 1)

### Task 5: Hero section - complete rewrite

**Files:**
- Modify: `index.html:115-169` (mv-section)
- Modify: `assets/css/style.css` (末尾に追記)

**Step 1: Replace mv-section HTML**

`<section class="mv-section">`の内容を以下に完全置換:

```html
<section class="mv-section">
  <div class="inner-block">
    <div class="mv-grid">
      <!-- Left: Text area -->
      <div class="mv-text-area">
        <div class="mv-logo">
          <img src="MCPon文字ロゴ.png" alt="MCPon" class="mcpon-logo-main">
        </div>

        <h1 class="main-ttl">
          <span class="big">
            優秀な社員の仕事術を<br>
            全社員が<span class="gradient-text">クローン</span>可能に
          </span>
        </h1>

        <p class="mv-sub-copy">
          導入から定着・改革まで一気通貫で丸投げ。<br>
          安心のAI活用拡大を初日から実現します。
        </p>

        <div class="mv-stats">
          <div class="stat-card stat-blue">
            <span class="stat-label">売上向上</span>
            <span class="stat-value">+10% 〜 300%</span>
          </div>
          <div class="stat-card stat-purple">
            <span class="stat-label">経費削減</span>
            <span class="stat-value">10% 〜 30%</span>
          </div>
          <div class="stat-card stat-pink">
            <span class="stat-label">人件費</span>
            <span class="stat-value">最大55%削減</span>
          </div>
        </div>

        <div class="mv-cta-buttons">
          <a href="#contact-section" class="c-btn-gradient"><span class="inn-txt">無料で相談する</span></a>
          <a href="#contact-section" class="c-btn-ghost"><span class="inn-txt">サービス資料をダウンロード</span></a>
        </div>
      </div>

      <!-- Right: Visual area -->
      <div class="mv-visual-area">
        <div class="clone-visual">
          <div class="clone-source">
            <i class="fas fa-user-tie"></i>
            <i class="fas fa-lightbulb clone-bulb"></i>
            <span>優秀なリーダー</span>
          </div>
          <div class="clone-arrow">
            <div class="clone-prompt-box">
              <i class="fas fa-terminal"></i>
              <span>プロンプト</span>
            </div>
          </div>
          <div class="clone-targets">
            <div class="clone-person"><i class="fas fa-user"></i></div>
            <div class="clone-person"><i class="fas fa-user"></i></div>
            <div class="clone-person"><i class="fas fa-user"></i></div>
            <div class="clone-person"><i class="fas fa-user"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Step 2: Add Hero CSS to end of style.css**

```css
/* ============================
   MCPon Hero Section
   ============================ */
.mcpon-logo-main {
  height: 60px;
  margin-bottom: 16px;
}

.gradient-text {
  background: var(--aion-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
}

.mv-sub-copy {
  font-size: 15px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 32px;
}

.mv-stats {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
}

.stat-card {
  padding: 16px 20px;
  border-radius: 12px;
  color: #fff;
  text-align: center;
  flex: 1;
}
.stat-card .stat-label {
  display: block;
  font-size: 12px;
  opacity: 0.9;
  margin-bottom: 4px;
}
.stat-card .stat-value {
  display: block;
  font-size: 18px;
  font-weight: 700;
}
.stat-blue { background: linear-gradient(135deg, #5B8CC3, #467EB5); }
.stat-purple { background: linear-gradient(135deg, #422C81, #5B3DA8); }
.stat-pink { background: linear-gradient(135deg, #D14A76, #E85D8A); }

.mv-cta-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.c-btn-gradient {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  background: var(--aion-gradient);
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none;
}
.c-btn-gradient:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(209,74,118,0.3);
}

.c-btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  background: #fff;
  color: var(--aion-text);
  border: 1px solid #ddd;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  transition: border-color 0.3s;
  text-decoration: none;
}
.c-btn-ghost:hover {
  border-color: var(--aion-blue);
  color: var(--aion-blue);
}

/* Clone Visual */
.mv-visual-area {
  display: flex;
  align-items: center;
  justify-content: center;
}
.clone-visual {
  display: flex;
  align-items: center;
  gap: 24px;
}
.clone-source {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
}
.clone-source .fa-user-tie {
  font-size: 48px;
  color: var(--aion-blue);
}
.clone-bulb {
  position: absolute;
  top: -12px;
  right: -8px;
  font-size: 20px;
  color: #FFD700;
}
.clone-source span {
  font-size: 12px;
  font-weight: 600;
  color: var(--aion-text);
}
.clone-arrow {
  display: flex;
  align-items: center;
}
.clone-prompt-box {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: var(--aion-gradient);
  color: #fff;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
}
.clone-targets {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.clone-person {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--aion-bg-sub);
  border: 2px solid var(--aion-blue);
  border-radius: 50%;
}
.clone-person .fa-user {
  font-size: 22px;
  color: var(--aion-blue);
}

@media screen and (max-width: 768px) {
  .mv-stats { flex-direction: column; }
  .mv-cta-buttons { flex-direction: column; }
  .stat-card .stat-value { font-size: 16px; }
}
```

**Step 3: Verify** - ヒーローセクションにMCPonロゴ、コピー、実績カード、CTAボタン、クローンビジュアルが表示されること

---

## Phase 4: CTA Zone (共通コンポーネント)

### Task 6: Create reusable CTA zone

**Files:**
- Modify: `index.html` - 既存の全CTA area（L379-400, L488-509, L740-761, L1174-1195, L1221-1242, L1362-1383）を置換
- Modify: `assets/css/style.css` (末尾に追記)

**Step 1: Define the shared CTA HTML block**

以下のHTMLブロックを共通CTAとして使用。既存の6つの`<div class="cta-area">`を全て以下に置換:

```html
<div class="cta-area mcpon-cta" data-aos="fade">
  <div class="inner-block">
    <div class="cta-bg-icon"></div>
    <p class="cta-main-txt">
      自社の業務は、どこまで<span class="cta-highlight">AIで自動化</span>できるか。<br>
      まずは専門スタッフが無料でアドバイスします。
    </p>
    <div class="cta-buttons">
      <a href="#contact-section" class="c-btn-gradient"><span class="inn-txt">無料で相談する</span></a>
      <a href="#contact-section" class="c-btn-ghost"><span class="inn-txt">サービス資料をダウンロード</span></a>
    </div>
    <p class="cta-micro">強引な営業は一切ありません。最短翌営業日に専門スタッフよりご連絡します。</p>
  </div>
</div>
```

**Step 2: Add CTA CSS**

```css
/* ============================
   MCPon CTA Zone
   ============================ */
.mcpon-cta {
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 80px 0;
}
.mcpon-cta .cta-bg-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  opacity: 0.03;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23333"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42A6.92 6.92 0 0119 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.27 1.08-4.29 2.76-5.57L6.34 5.02A8.94 8.94 0 003 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.76-1.25-5.23-3.17-6.83z"/></svg>') no-repeat center;
  background-size: contain;
}
.cta-main-txt {
  font-size: 22px;
  font-weight: 700;
  line-height: 1.7;
  margin-bottom: 32px;
  color: var(--aion-text);
}
.cta-highlight {
  background: linear-gradient(transparent 60%, rgba(209,74,118,0.2) 60%);
  padding: 0 2px;
}
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.cta-micro {
  font-size: 13px;
  color: #999;
}
```

**Step 3: Verify** - 各セクション間にCTAゾーンが正しく表示されること

**Note:** CTA配置箇所（service.docx準拠で6箇所）:
1. Before/After の後
2. 業務ステップの後
3. MCPon特徴の後
4. 取組事例の後
5. 料金プランの後
6. 会社概要の後

---

## Phase 5: Sections 2-3 (導入実績 + Before/After)

### Task 7: Section 2 - 導入実績（ロゴスライダー）

**Files:**
- Modify: `index.html:171-259` (logo-loop-section)

**Step 1: 最小限の変更**

この セクションは既存のロゴスライダーをほぼそのまま活用。変更点:
- 背景を薄いグレー `#F9F9F9` に
- 見出しの装飾色をAIONブルーに

見出し部分のみ修正:
```html
<section class="logo-loop-section" style="background: #F9F9F9;">
  <h2 class="c-ttl02">
    <span class="inn-txt">導入実績</span>
  </h2>
  <!-- 以下のロゴスライダーはそのまま維持 -->
```

**Step 2: Verify** - ロゴスライダーが正常に動作すること

---

### Task 8: Section 3 - Before/After図

**Files:**
- Modify: `index.html:261-377` (onestop-section)
- Modify: `assets/css/style.css` (末尾に追記)

**Step 1: Replace onestop-section HTML**

```html
<section class="onestop-section mcpon-beforeafter" data-aos="fade">
  <div class="inner-block">
    <h2 class="c-ttl01">
      <span class="ttl">社内の情報をAIが全て集約する</span>
      <span class="border"></span>
      <span class="sub">Before / After</span>
    </h2>

    <p class="c-top-txt">
      社内のデータをAIが活用できるので、ミスが無くなります。
    </p>

    <div class="ba-container">
      <div class="ba-before" data-aos="fade-right">
        <div class="ba-header ba-header-before">
          <span>Before</span>
          <span class="ba-label">従来型AI活用</span>
        </div>
        <div class="ba-content">
          <div class="ba-icon-area">
            <i class="fas fa-user-clock fa-3x" style="color: #999;"></i>
          </div>
          <div class="ba-desc">
            <p class="ba-copy">チャット止まり。結局、人間がコピペして実務をこなしている。</p>
            <div class="ba-flow">
              <span class="ba-step"><i class="fas fa-robot"></i> AIチャット</span>
              <i class="fas fa-arrow-right" style="color:#ccc;"></i>
              <span class="ba-step"><i class="fas fa-copy"></i> 人間がコピー</span>
              <i class="fas fa-arrow-right" style="color:#ccc;"></i>
              <span class="ba-step"><i class="fas fa-paste"></i> 各ツールにペースト</span>
            </div>
          </div>
        </div>
      </div>

      <div class="ba-switch">
        <div class="ba-power-icon">
          <i class="fas fa-power-off"></i>
        </div>
      </div>

      <div class="ba-after" data-aos="fade-left">
        <div class="ba-header ba-header-after">
          <span>After</span>
          <span class="ba-label">MCPon活用</span>
        </div>
        <div class="ba-content">
          <div class="ba-icon-area">
            <i class="fas fa-wand-magic-sparkles fa-3x" style="color: var(--aion-blue);"></i>
          </div>
          <div class="ba-desc">
            <p class="ba-copy">実務完結。AIが各ツールを直接操作し、タスクを終わらせる。</p>
            <div class="ba-tools-grid">
              <span class="ba-tool-done"><i class="fab fa-slack"></i> Slack <i class="fas fa-check-circle" style="color:#22c55e;"></i></span>
              <span class="ba-tool-done"><i class="fab fa-salesforce"></i> Salesforce <i class="fas fa-check-circle" style="color:#22c55e;"></i></span>
              <span class="ba-tool-done"><i class="fas fa-file-excel"></i> Excel <i class="fas fa-check-circle" style="color:#22c55e;"></i></span>
              <span class="ba-tool-done"><i class="fas fa-envelope"></i> Mail <i class="fas fa-check-circle" style="color:#22c55e;"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Step 2: Add Before/After CSS**

```css
/* ============================
   MCPon Before/After
   ============================ */
.ba-container {
  display: flex;
  align-items: stretch;
  gap: 0;
  margin-top: 40px;
}
.ba-before, .ba-after {
  flex: 1;
  border-radius: 16px;
  overflow: hidden;
}
.ba-before { background: #f5f5f5; }
.ba-after { background: linear-gradient(135deg, rgba(209,74,118,0.05), rgba(91,140,195,0.08)); }
.ba-header {
  padding: 12px 20px;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ba-header-before { background: #e5e5e5; color: #666; }
.ba-header-after { background: var(--aion-gradient); color: #fff; }
.ba-label { font-weight: 400; font-size: 12px; opacity: 0.8; }
.ba-content { padding: 32px 24px; }
.ba-icon-area { text-align: center; margin-bottom: 20px; }
.ba-copy { font-weight: 700; font-size: 16px; margin-bottom: 20px; text-align: center; }
.ba-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}
.ba-step {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: #fff;
  border-radius: 8px;
  font-size: 13px;
  border: 1px solid #ddd;
}
.ba-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
}
.ba-power-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--aion-gradient);
  border-radius: 50%;
  color: #fff;
  font-size: 24px;
  box-shadow: 0 4px 20px rgba(209,74,118,0.3);
}
.ba-tools-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.ba-tool-done {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 12px;
  background: #fff;
  border-radius: 8px;
  font-size: 13px;
  border: 1px solid rgba(91,140,195,0.3);
}

@media screen and (max-width: 768px) {
  .ba-container { flex-direction: column; }
  .ba-switch { padding: 16px 0; }
  .ba-power-icon { transform: rotate(90deg); }
}
```

**Step 3: Verify** - Before/After図が左右に並び、中央に電源アイコンが表示されること

---

## Phase 6: Section 5 - 業務ステップ7工程

### Task 9: Business steps (一気通貫フロー)

**Files:**
- Modify: `index.html` - `onestop-section`内のflow-area（L289-376）を削除し、新規セクションとして独立させる。もしくは`feature-section`(L402-486)を完全に置換。
- Modify: `assets/css/style.css` (末尾に追記)

**Step 1: Replace feature-section (L402-486) with business steps**

```html
<section class="steps-section" data-aos="fade">
  <div class="inner-block">
    <h2 class="c-ttl01">
      <span class="ttl">業務の始まりから終わりまで、<br class="sp">一気通貫でフルオート化</span>
      <span class="border"></span>
      <span class="sub">Full Automation</span>
    </h2>

    <div class="steps-flow">
      <div class="steps-line"></div>
      <div class="steps-list">
        <div class="step-card" data-aos="fade-up" data-aos-delay="0">
          <div class="step-badge">MCPon</div>
          <div class="step-num">1</div>
          <p class="step-title">データ取得</p>
          <p class="step-desc">各種SaaSや基幹システムへ自動アクセス・抽出</p>
          <i class="fas fa-database step-icon"></i>
        </div>
        <div class="step-card" data-aos="fade-up" data-aos-delay="100">
          <div class="step-badge">MCPon</div>
          <div class="step-num">2</div>
          <p class="step-title">構造化加工</p>
          <p class="step-desc">バラバラな形式のデータをAIが即座に分析用へ整理</p>
          <i class="fas fa-table step-icon"></i>
        </div>
        <div class="step-card step-card-highlight" data-aos="fade-up" data-aos-delay="200">
          <div class="step-badge">MCPon</div>
          <div class="step-num">3</div>
          <p class="step-title">異常検知・判断</p>
          <p class="step-desc">数値を読み取り、前月比の違和感や重要トピックを特定</p>
          <i class="fas fa-magnifying-glass-chart step-icon"></i>
        </div>
        <div class="step-card step-card-highlight" data-aos="fade-up" data-aos-delay="300">
          <div class="step-badge">MCPon</div>
          <div class="step-num">4</div>
          <p class="step-title">背景調査</p>
          <p class="step-desc">社内DBや過去ログを自ら検索し、増減の原因を裏付け</p>
          <i class="fas fa-search step-icon"></i>
        </div>
        <div class="step-card step-card-highlight" data-aos="fade-up" data-aos-delay="400">
          <div class="step-badge">MCPon</div>
          <div class="step-num">5</div>
          <p class="step-title">レポート起票</p>
          <p class="step-desc">分析結果に基づき、報告用ドキュメントをプロレベルで作成</p>
          <i class="fas fa-file-lines step-icon"></i>
        </div>
        <div class="step-card step-card-human" data-aos="fade-up" data-aos-delay="500">
          <div class="step-badge step-badge-human">人間</div>
          <div class="step-num">6</div>
          <p class="step-title">最終確認</p>
          <p class="step-desc">AIが作成した完璧なドラフトを「承認」するだけ</p>
          <i class="fas fa-user-check step-icon"></i>
        </div>
        <div class="step-card" data-aos="fade-up" data-aos-delay="600">
          <div class="step-badge">MCPon</div>
          <div class="step-num">7</div>
          <p class="step-title">全社展開</p>
          <p class="step-desc">承認後、Slackやメール、各システムへ一斉に自動反映</p>
          <i class="fas fa-share-nodes step-icon"></i>
        </div>
      </div>
    </div>

    <p class="steps-footer-txt">
      バラバラだったツールを、MCPonが一つに繋ぐ。<br>
      <strong style="color: var(--aion-blue);">「人間が介在しないと進まなかった工程」を含め、すべてをAIが完結させます。</strong>
    </p>

    <div class="steps-metrics">
      <div class="stat-card stat-blue">
        <span class="stat-label">売上向上</span>
        <span class="stat-value">最大+300%</span>
      </div>
      <div class="stat-card stat-purple">
        <span class="stat-label">経費削減</span>
        <span class="stat-value">10%〜30%</span>
      </div>
      <div class="stat-card stat-pink">
        <span class="stat-label">人件費</span>
        <span class="stat-value">最大55%削減</span>
      </div>
    </div>
  </div>
</section>
```

**Step 2: Add steps CSS** (style.css末尾)

```css
/* ============================
   MCPon Business Steps
   ============================ */
.steps-flow {
  position: relative;
  margin: 48px 0;
}
.steps-line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--aion-gradient);
  z-index: 0;
  border-radius: 2px;
}
.steps-list {
  display: flex;
  gap: 12px;
  position: relative;
  z-index: 1;
  overflow-x: auto;
  padding: 20px 0;
}
.step-card {
  flex: 1;
  min-width: 140px;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 20px 16px;
  text-align: center;
  position: relative;
  transition: transform 0.3s;
}
.step-card:hover { transform: translateY(-4px); }
.step-card-highlight {
  border-color: var(--aion-blue);
  box-shadow: 0 4px 20px rgba(91,140,195,0.15);
}
.step-card-human {
  border-color: #22c55e;
  background: rgba(34,197,94,0.03);
}
.step-badge {
  display: inline-block;
  padding: 2px 10px;
  background: var(--aion-gradient);
  color: #fff;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 8px;
}
.step-badge-human {
  background: #22c55e;
}
.step-num {
  font-size: 24px;
  font-weight: 900;
  color: var(--aion-blue);
  margin-bottom: 4px;
}
.step-card-human .step-num { color: #22c55e; }
.step-title {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
}
.step-desc {
  font-size: 12px;
  color: #666;
  line-height: 1.5;
}
.step-icon {
  font-size: 20px;
  color: var(--aion-blue);
  margin-top: 12px;
  opacity: 0.6;
}
.steps-footer-txt {
  text-align: center;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 40px;
}
.steps-metrics {
  display: flex;
  gap: 16px;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .steps-list { flex-direction: column; }
  .steps-line { display: none; }
  .steps-metrics { flex-direction: column; }
}
```

**Step 3: Verify** - 7つのステップカードが横並びで表示され、グラデーションラインが貫通すること

---

## Phase 7: Section 7 - MCPon特徴（3カラム）

### Task 10: MCPon Features (3-column cards)

**Files:**
- Modify: `index.html` - feature-section の次のCTA areaの後に新規セクション挿入
- Modify: `assets/css/style.css` (末尾に追記)

**Step 1: Insert new feature section HTML** (CTA #2の後に)

```html
<section class="mcpon-feature-section" data-aos="fade">
  <div class="inner-block">
    <h2 class="c-ttl01">
      <span class="ttl">AI活用を「試行」で終わらせない。<br class="sp">MCPonが選ばれる3つの理由</span>
      <span class="border"></span>
      <span class="sub">Why MCPon</span>
    </h2>

    <div class="feature-cards">
      <div class="feature-card" data-aos="fade-right">
        <div class="feature-card-inner">
          <div class="feature-icon-area">
            <i class="fas fa-gears"></i>
          </div>
          <div class="feature-text-area">
            <p class="feature-num">01</p>
            <p class="feature-tag">技術</p>
            <p class="feature-card-ttl">ツール接続の自由度</p>
            <p class="feature-card-txt">既存の基幹システムやSaaSを、独自のMCP技術で安全に接続。AIが直接実務を操作できる環境を構築します。</p>
          </div>
        </div>
      </div>

      <div class="feature-card feature-card-center" data-aos="fade-up">
        <div class="feature-card-inner">
          <div class="feature-icon-area">
            <i class="fas fa-shield-halved"></i>
          </div>
          <div class="feature-text-area">
            <p class="feature-num">02</p>
            <p class="feature-tag">安全</p>
            <p class="feature-card-ttl">高度な権限・ログ管理</p>
            <p class="feature-card-txt">誰が・いつ・どのツールを操作したかを全て記録。社内の権限設定を維持したまま、安全な全社展開を可能にします。</p>
          </div>
        </div>
      </div>

      <div class="feature-card" data-aos="fade-left">
        <div class="feature-card-inner">
          <div class="feature-icon-area">
            <i class="fas fa-handshake"></i>
          </div>
          <div class="feature-text-area">
            <p class="feature-num">03</p>
            <p class="feature-tag">体制</p>
            <p class="feature-card-ttl">一気通貫のフルサポート</p>
            <p class="feature-card-txt">戦略策定からプロンプト作成、現場への教育まで。AI活用のプロが貴社のチームの一員として定着まで伴走します。</p>
          </div>
        </div>
      </div>
    </div>

    <p class="feature-note">最新のLLM（ChatGPT, Claude, Gemini等）すべてに対応。インフラを選ばない柔軟な導入が可能です。</p>
  </div>
</section>
```

**Step 2: Add feature card CSS** (style.css末尾)

```css
/* ============================
   MCPon Feature Cards
   ============================ */
.feature-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 48px 0 32px;
}
.feature-card {
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
}
.feature-card-inner {
  display: flex;
  gap: 20px;
  padding: 32px 24px;
}
.feature-icon-area {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--aion-gradient-light);
  border-radius: 16px;
  font-size: 28px;
  color: var(--aion-blue);
}
.feature-num {
  font-size: 28px;
  font-weight: 900;
  color: var(--aion-blue);
  opacity: 0.3;
  line-height: 1;
}
.feature-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 8px;
  background: var(--aion-blue);
  color: #fff;
  border-radius: 4px;
  margin: 4px 0 8px;
}
.feature-card-ttl {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
}
.feature-card-txt {
  font-size: 14px;
  color: #666;
  line-height: 1.7;
}
.feature-note {
  text-align: center;
  font-size: 14px;
  color: #999;
}

@media screen and (max-width: 768px) {
  .feature-cards { grid-template-columns: 1fr; }
  .feature-card-inner { flex-direction: column; align-items: center; text-align: center; }
}
```

**Step 3: Verify** - 3つの特徴カードが横並びで左右からアニメーション出現すること

---

## Phase 8: Section 9 - 取組事例

### Task 11: Case studies slider

**Files:**
- Modify: `index.html:511-738` (case-section)

**Step 1: Replace case-section content**

既存のSplide構造を維持し、コンテンツのみMCPon事例に差し替え。各`splide__slide`のコンテンツを以下3件に:

1. **大手製造業**: 「新人がベテラン同等の提案書を30分で作成可能に」
2. **IT・サービス業**: 「ERP・BI連携で、経営判断に必要なレポート作成時間をゼロに」
3. **会計・コンサルティング業**: 「熟練スタッフの『判断業務』をクローン化し、残業月40時間削減」

既存のSplideスライダー構造（splide__track, splide__list等）はそのまま維持し、各slide内のテキスト・Before/After内容のみ差し替え。

見出しを「取組事例」/ "Case"のまま維持（service.docxと一致）。

画像エリアは`<div class="img-area">`内をFont Awesomeアイコン+背景色で代替。

**Step 2: Verify** - スライダーが動作し、3つの事例が表示されること

---

## Phase 9: Sections 11-12 (ユースケース + ツール)

### Task 12: Use cases (業界・部署) + Tool connections

**Files:**
- Modify: `index.html:763-1172` (any-section)

**Step 1: Replace any-section content**

既存のany-sectionの3ブロック構造を活用:
- `.business.each` → MCPon版 業界8種（service.docx準拠のテキストに差し替え）
- `.department.each` → MCPon版 部署8種（service.docx準拠のテキストに差し替え）
- `.tool.each` → 接続可能ツール一覧（コミュニケーション系 + 業務基幹系）

**業界スライダー内容** (service.docx準拠):
- [建設・不動産] 資材の在庫管理と受発注管理
- [運輸・物流] 送り状・注文書の作成
- [製造業] 公差のデータ出入力・異常検知
- [卸売・小売] 受注・在庫引き当て処理
- [医療・福祉] 診療予約と電子カルテへの反映
- [ホテル・外食] 予約確認・変更手続き
- [官公庁] 申告データの収集・分析
- [通信・メディア] ソフトウェアの定期テスト・ログ集計

**部署スライダー内容** (service.docx準拠):
- [営業] 見込み顧客へのアプローチリスト作成・メール送付
- [経理・財務] 交通費精算チェック・月次レポート作成
- [人事・総務] 過重労働者の抽出と連絡・社内規定検索
- [マーケティング] 広告レポート作成・競合サイト更新検知
- [カスタマーサポート] FAQ一次回答・問い合わせの自動分類
- [法務・管理] 契約書の差分チェック・リスク箇所抽出
- [情報システム] アカウント発行・パスワードリセット対応
- [研究開発] 論文の要約と特定データの抽出

**ツールスライダー**: 既存ツールアイコン画像を活用しつつ、service.docxの接続説明テキストを追加。

見出しを変更:
- 全体: 「どんな業務でも、MCPonなら自動化可能」/ "Any operation"
- 業界: 「どんな業界の業務でも」
- 部署: 「どんな部署の業務でも」
- ツール: 「現在お使いのツールと、そのまま接続」

**Step 2: Verify** - 3ブロックのスライダーが正常に動作し、MCPon版コンテンツが表示されること

---

## Phase 10: Section 14 - 料金プラン

### Task 13: Service plans and pricing

**Files:**
- Modify: `index.html:1197-1219` (plan-section)
- Modify: `assets/css/style.css` (末尾に追記)

**Step 1: Replace plan-section content**

```html
<section class="plan-section" data-aos="fade">
  <div class="inner-block">
    <h2 class="c-ttl01">
      <span class="ttl">サービス内容・プラン</span>
      <span class="border"></span>
      <span class="sub">Plan</span>
    </h2>

    <div class="plan-flow">
      <p class="plan-flow-ttl">導入の流れ</p>
      <div class="plan-flow-steps">
        <div class="plan-flow-step">
          <span class="plan-flow-num">1</span>
          <span>現状分析(PoC)</span>
        </div>
        <i class="fas fa-arrow-right plan-flow-arrow"></i>
        <div class="plan-flow-step">
          <span class="plan-flow-num">2</span>
          <span>環境構築</span>
        </div>
        <i class="fas fa-arrow-right plan-flow-arrow"></i>
        <div class="plan-flow-step">
          <span class="plan-flow-num">3</span>
          <span>社内展開</span>
        </div>
        <i class="fas fa-arrow-right plan-flow-arrow"></i>
        <div class="plan-flow-step">
          <span class="plan-flow-num">4</span>
          <span>継続改善</span>
        </div>
      </div>
      <p class="plan-lead">最短1ヶ月〜</p>
    </div>

    <div class="plan-table">
      <div class="plan-card">
        <p class="plan-name">初期導入</p>
        <p class="plan-price">60<span class="plan-unit">万円〜</span></p>
        <p class="plan-note">5台まで一律</p>
      </div>
      <div class="plan-card">
        <p class="plan-name">月額サービス利用料</p>
        <p class="plan-price">15<span class="plan-unit">万円/月</span></p>
        <p class="plan-note">&nbsp;</p>
      </div>
      <div class="plan-card">
        <p class="plan-name">簡易サポートサービス</p>
        <p class="plan-price">30<span class="plan-unit">万円/月</span></p>
        <p class="plan-note">&nbsp;</p>
      </div>
      <div class="plan-card plan-card-premium">
        <p class="plan-name">AIトランスフォーメーション<br>コンサル</p>
        <p class="plan-price">100<span class="plan-unit">万円〜</span></p>
        <p class="plan-note">&nbsp;</p>
      </div>
    </div>
  </div>
</section>
```

**Step 2: Add plan CSS** (style.css末尾)

```css
/* ============================
   MCPon Plan Section
   ============================ */
.plan-flow {
  text-align: center;
  margin: 40px 0;
  padding: 32px;
  background: var(--aion-bg-sub);
  border-radius: 16px;
}
.plan-flow-ttl {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
}
.plan-flow-steps {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}
.plan-flow-step {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: #fff;
  border: 1px solid var(--aion-blue);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
}
.plan-flow-num {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--aion-blue);
  color: #fff;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 700;
}
.plan-flow-arrow { color: var(--aion-blue); }
.plan-lead {
  margin-top: 16px;
  font-size: 14px;
  color: #999;
}
.plan-table {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 32px;
}
.plan-card {
  text-align: center;
  padding: 32px 20px;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  transition: transform 0.3s;
}
.plan-card:hover { transform: translateY(-4px); }
.plan-card-premium {
  border-color: var(--aion-blue);
  background: rgba(91,140,195,0.03);
}
.plan-name {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 16px;
  min-height: 40px;
}
.plan-price {
  font-size: 36px;
  font-weight: 900;
  color: var(--aion-blue);
}
.plan-unit {
  font-size: 14px;
  font-weight: 500;
  color: var(--aion-text);
}
.plan-note {
  font-size: 12px;
  color: #999;
  margin-top: 8px;
}

@media screen and (max-width: 768px) {
  .plan-table { grid-template-columns: repeat(2, 1fr); }
}
```

**Step 3: Verify** - 導入フローと4つの料金カードが表示されること

---

## Phase 11: Section 16 - FAQ

### Task 14: FAQ content replacement

**Files:**
- Modify: `index.html:1244-1325` (qa-section)

**Step 1: Replace FAQ content**

既存のアコーディオン構造（`js-accordion-btn`クラス）をそのまま維持し、Q&A内容を5つのMCPon版FAQに差し替え:

1. Q: 自社の機密データがAIの学習に使われることはありますか？ / A: いいえ、一切ありません...
2. Q: 既存の社内ツールや独自システムとの連携には、別途開発費用が必要ですか？ / A: 標準ツールはMCP設定のみで即座に連携可能...
3. Q: セキュリティ面での「権限管理」はどうなっていますか？ / A: MCPハブにより厳格にコントロール...
4. Q: すでにChatGPTやClaudeを契約していますが、それを使えますか？ / A: はい、可能です...
5. Q: 導入を検討してから実際に使えるまでどのくらいかかりますか？ / A: 初日から効果を実感...

セキュリティ関連のQ（1,3番）には `<span class="security-badge">Security</span>` バッジを追加。

**Step 2: Add security badge CSS**

```css
.security-badge {
  display: inline-block;
  padding: 2px 8px;
  background: var(--aion-blue);
  color: #fff;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 700;
  margin-left: 8px;
  vertical-align: middle;
}
```

**Step 3: Verify** - 5つのFAQがアコーディオンで開閉すること

---

## Phase 12: Section 17 - 会社概要

### Task 15: Company info update

**Files:**
- Modify: `index.html:1327-1360` (company-section)

**Step 1: Replace company-section content**

```html
<section class="company-section" data-aos="fade">
  <div class="inner-block">
    <h2 class="c-ttl01">
      <span class="ttl">すべての企業にAIの力を。</span>
      <span class="border"></span>
      <span class="sub">Company</span>
    </h2>

    <div class="company-content">
      <div class="company-logo-area">
        <img src="AION_会社アイコン_vF.png" alt="AION" style="height: 120px;">
      </div>
      <table class="company-table">
        <tbody>
          <tr><th>社名</th><td>AION株式会社</td></tr>
          <tr><th>所在地</th><td>東京都渋谷区千駄ヶ谷3-5-10</td></tr>
          <tr><th>代表取締役</th><td>細貝 拓磨</td></tr>
          <tr><th>資本金</th><td>1000万円</td></tr>
          <tr><th>事業内容</th><td>AIエージェント「MCPon」の開発・運営、MCP導入支援、AI人材育成コンサルティング、DX推進支援</td></tr>
          <tr><th>設立</th><td>2025年5月</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
```

**Step 2: Verify** - AION社情報が正しく表示されること

---

## Phase 13: Section 18 - 資料請求フォーム

### Task 16: Contact form (dummy HTML)

**Files:**
- Modify: `index.html:1386-1408` (contact-section)
- Modify: `assets/css/style.css` (末尾に追記)

**Step 1: Replace contact-section content**

HubSpotスクリプト(L1396-1403)を削除し、HTMLフォームに置換:

```html
<section id="contact-section" class="contact-section" data-aos="fade">
  <div class="inner-block">
    <h2 class="c-ttl01">
      <span class="ttl">資料ダウンロード</span>
      <span class="border"></span>
      <span class="sub">Document download</span>
    </h2>

    <form class="mcpon-form" onsubmit="return false;">
      <div class="form-group">
        <label>会社名 <span class="required">*</span></label>
        <input type="text" placeholder="株式会社〇〇" required>
      </div>
      <div class="form-group">
        <label>部署 <span class="required">*</span></label>
        <input type="text" placeholder="経営企画部" required>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>姓 <span class="required">*</span></label>
          <input type="text" placeholder="山田" required>
        </div>
        <div class="form-group">
          <label>名 <span class="required">*</span></label>
          <input type="text" placeholder="太郎" required>
        </div>
      </div>
      <div class="form-group">
        <label>会社メールアドレス <span class="required">*</span></label>
        <input type="email" placeholder="taro.yamada@example.co.jp" required>
      </div>
      <div class="form-group">
        <label>電話番号</label>
        <input type="tel" placeholder="03-1234-5678">
      </div>
      <div class="form-check">
        <input type="checkbox" id="privacy-check" required>
        <label for="privacy-check">MCPonの<a href="#" style="color: var(--aion-blue); text-decoration: underline;">個人情報の取り扱い</a>に同意の上フォームの送信をお願いいたします。</label>
      </div>
      <button type="submit" class="form-submit">送信</button>
    </form>
  </div>
</section>
```

**Step 2: Add form CSS** (style.css末尾)

```css
/* ============================
   MCPon Contact Form
   ============================ */
.mcpon-form {
  max-width: 640px;
  margin: 40px auto 0;
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
}
.required {
  color: var(--aion-pink);
  font-weight: 700;
}
.form-group input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  background: #F5F7FA;
  transition: border-color 0.3s;
}
.form-group input:focus {
  border-color: var(--aion-blue);
  outline: none;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.form-check {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 24px 0;
  font-size: 13px;
}
.form-check input[type="checkbox"] {
  width: 18px;
  height: 18px;
  margin-top: 2px;
  accent-color: var(--aion-blue);
}
.form-submit {
  display: block;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  padding: 16px;
  background: var(--aion-blue);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s;
}
.form-submit:hover {
  background: var(--aion-blue-secondary);
}
```

**Step 3: Verify** - フォームが正しく表示され、バリデーションが動作すること

---

## Phase 14: JS Adjustments + Final Polish

### Task 17: Update common.js for new section structure

**Files:**
- Read & Modify: `assets/js/common.js`

**Step 1: Read common.js to understand Splide initialization**

**Step 2: Ensure Splide initializations match new HTML structure**

新しいセクション追加で既存のSplide初期化が壊れていないか確認。必要に応じてセレクタを調整。

**Step 3: Verify** - 全スライダー（ロゴループ、事例、ユースケース、ツール）が正常に動作

---

### Task 18: Remove duplicate `</main>` tag and cleanup

**Files:**
- Modify: `index.html:1413` - 重複する`</main>`タグを削除

**Step 1: Fix HTML structure**

L1412-1413に`</main>`が2つある。1つ削除:
```
</main><!-- main -->
</main><!-- main -->  ← これを削除
```

**Step 2: W3C Validator等でHTML構造の妥当性を確認**

---

### Task 19: Responsive check and final visual polish

**Files:**
- Modify: `assets/css/style.css`

**Step 1: ブラウザで全セクションをPC幅とSP幅で確認**

**Step 2: レスポンシブ崩れがあれば修正**

特に注意するポイント:
- ヒーローの左右分割がSPで縦に並ぶか
- 業務ステップの7カードがSPで縦並びになるか
- 料金カードが2x2グリッドになるか
- CTAボタンがSPで縦並びになるか
- Before/AfterがSPで縦並びになるか

**Step 3: 全体の色味、余白、フォントサイズの最終調整**

---

## Summary

| Phase | Tasks | Description |
|-------|-------|-------------|
| 1 | Task 1-2 | Foundation (head, CSS vars, Font Awesome) |
| 2 | Task 3-4 | Header + Footer |
| 3 | Task 5 | Hero Section |
| 4 | Task 6 | CTA Zone (6箇所) |
| 5 | Task 7-8 | 導入実績 + Before/After |
| 6 | Task 9 | 業務ステップ7工程 |
| 7 | Task 10 | MCPon特徴3カラム |
| 8 | Task 11 | 取組事例スライダー |
| 9 | Task 12 | ユースケース + ツール |
| 10 | Task 13 | 料金プラン |
| 11 | Task 14 | FAQ |
| 12 | Task 15 | 会社概要 |
| 13 | Task 16 | 資料請求フォーム |
| 14 | Task 17-19 | JS調整 + 最終ポリッシュ |

**Total: 19 Tasks, 14 Phases**
