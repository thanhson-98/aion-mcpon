# Common Scenario Section Design

## Overview

`steps-section`（「業務の始まりから終わりまで、一気通貫でフルオート化」）を、v2.pdf 9ページ目の「こんな場面ありますよね？」セクションに内容・デザインともに置き換える。

## 変更対象ファイル

- `index.html` — 行242〜325（steps-section全体）
- `assets/css/style.css` — 行1995〜2095（steps系CSS全体）

## デザイン仕様

### セクション構造

```
section.scenario-section
  ├── .scenario-top-line（グラデーションライン）
  ├── h2
  │   ├── span.scenario-label "COMMON SCENARIO"
  │   └── span.scenario-ttl "こんな場面ありますよね？"
  ├── .scenario-grid（7カードのflexbox wrap）
  │   └── .scenario-card x7
  │       ├── .scenario-card-header（ネイビー帯+白数字）
  │       ├── .scenario-card-body（テキスト説明）
  │       └── .scenario-card-icon（Font Awesomeアイコン）
  └── .scenario-footer（警告テキスト）
```

### カード内容

| # | テキスト | アイコン |
|---|---------|---------|
| 1 | Excelからシステムへ貼り付ける際に1行ズレる | fa-table |
| 2 | 数字の打ち間違い（例：100,000→10,000） | fa-keyboard |
| 3 | 金額を入力する際に税抜/税込を勘違い | fa-yen-sign |
| 4 | 電話番号のハイフン位置がバラバラ | fa-phone |
| 5 | 最新ファイルだと思って開いたら古いバージョンだった | fa-file-circle-xmark |
| 6 | チャットで送られた情報を手入力で転記して誤字 | fa-comment-dots |
| 7 | 口頭で聞いた数値を聞き間違える | fa-ear-listen |

### カラーパレット

- カードヘッダー: `#1a1a4e`（ダークネイビー）
- 数字バッジ: 白丸、白文字
- カードボディ: `#fff` 背景、`#e5e5e5` ボーダー
- セクションラベル: `var(--aion-pink)` (#D14A76)
- 警告テキスト「人間はミスをする生き物」: `var(--aion-pink)`

### レスポンシブ（横スクロールなし・折り返し表示）

- **PC（>1024px）**: 7カード横一列（flex-wrap: wrap）
- **タブレット（769px〜1024px）**: 3〜4カード/行
- **SP（〜768px）**: 2カード/行

### 削除要素

- steps-metrics（統計カード3枚）
- steps-footer-txt
- steps-line（接続ライン）
- MCPon/人間バッジ
- step-card-highlight / step-card-human のバリエーション
