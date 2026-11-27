# Willy (Chen Wei-Ting) · AI Application Portfolio｜陳威廷 AI 應用作品集

18 projects built with Claude Code and other AI tools — each with the problem it solves, the approach and the tools behind it. Chinese / English, auto-detected from the browser language (defaults to English), with a toggle in the header.

用 Claude Code 等 AI 工具做出的 18 件作品，中英雙語，依瀏覽器語言自動切換，右上角也能手動切換。

Live: https://singwillychen.github.io/ai-portfolio/

## 檔案

- `index.html`：頁面與樣式（深色琥珀配色）、技能統計、分類篩選、快速檢視。
- `works.js`：作品資料。新增或修改作品只改這裡；`links` 的 `type` 可用 `demo`、`repo`、`video`（YouTube 會自動顯示縮圖並可在快速檢視裡播放），只放公開網址。
- `assets/shots/`：每件作品的首頁截圖。在 `works.js` 用 `shot` 指定檔案、`shot_kind` 標示 `real`（實際畫面）或 `illustration`（示意畫面）；有 YouTube 影片的作品會自動用影片縮圖。

## 瀏覽方式

- 頂端分類列固定在畫面上方；「分類選單」以樹狀列出各分類與作品，點分類即篩選、點作品直接跳到該卡片。
- 點作品截圖會放大檢視，可用 ← → 切換作品，Esc 關閉。
- 「AI 夥伴」介紹陪我入門的兩代 agent：蝦槓 Shotgun 與蝦寶寶 Shabaobao。

## 快速檢視

每張卡片的「快速檢視」：滑鼠移上去即顯示預覽（截圖、示意畫面或影片縮圖，加上痛點、做法、AI 角色、工具與個人說明）；點擊展開成大視窗，影片可直接播放；Esc 或點背景關閉。
