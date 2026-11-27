// 作品資料。新增或修改作品只要改這個檔案，卡片、分類、統計會自動更新。
// links 的 type：demo（線上試用）、repo（原始碼）、video（影片）。只放公開的網址。
window.WORKS = [
 {
  "id": "crew",
  "order": 1,
  "category": "ai",
  "status": "MVP",
  "name": "CREW 多業態 AI 員工平台",
  "name_en": "CREW — AI Employee Platform for Any Industry",
  "summary": "讓小團隊用「招募員工」的方式建立 AI 員工：說清楚工作內容、教它公司的規矩、考過試才上工，之後在 LINE、網站、電話等管道替你工作。",
  "summary_en": "Small teams create AI employees the way they hire people: define the job, teach the house rules, pass an exam before going live, then work across LINE, the website and phone calls.",
  "pain_point": "小店家想用 AI 客服，但現成方案多半只適合單一產業，設定複雜、價格偏高，也很難控管 AI 說錯話。",
  "pain_point_en": "Small businesses want AI customer service, but most tools fit one industry, are complex to set up, expensive, and hard to keep from saying the wrong thing.",
  "solution": "同一套核心搭配「行業模板包」（電商、餐飲、診所、補教、房仲等）；AI 員工要先通過考核才上線；接 OpenAI Realtime 做電話語音客服；多租戶資料以資料庫列級權限隔離。",
  "solution_en": "One core with swappable industry packs (retail, restaurants, clinics, tutoring, real estate…); AI employees must pass an exam before going live; phone voice agents via OpenAI Realtime; tenant data isolated with row-level security.",
  "ai_role": "設計 AI 員工的執行框架（角色規格、執行迴圈、護欄、考核），並用 Claude Code 從 PRD 一路做到可安裝的程式。",
  "ai_role_en": "Designed the agent harness (role specs, run loop, guardrails, evaluation) and used Claude Code to go from PRD to an installable product.",
  "tools": [
   "TypeScript",
   "Node.js",
   "PostgreSQL + pgvector",
   "Redis",
   "OpenAI Realtime",
   "LINE",
   "Docker",
   "Claude Code"
  ],
  "highlight": "M0–M4 里程碑完成、10 分鐘本機安裝、多租戶 RLS",
  "highlight_en": "Milestones M0–M4 done · 10-minute local install · multi-tenant RLS",
  "links": [],
  "my_note": "目標是串接 OpenAI Realtime 語音引擎，做到和 AI 雙向即時語音對談的語音客服。第一個想服務的對象，是在客服業工作的家人。",
  "my_note_en": "The goal is a voice support agent that holds real-time, two-way spoken conversations through the OpenAI Realtime voice engine. The first people I want it to serve are family members who work in customer service."
 },
 {
  "id": "diorama",
  "order": 2,
  "category": "ai",
  "status": "MVP",
  "name": "Agent Diorama 代理人微縮劇場",
  "name_en": "Agent Diorama",
  "summary": "把多個 AI agent 依職位放進 3D 微縮場景，即時看到他們工作、溝通、請示，主題可切換（修仙山門、戰情中心、新創辦公室）。",
  "summary_en": "Puts multiple AI agents into a 3D miniature world by role, so you can watch them work, talk and ask for approval in real time. Themes: mountain sect, combat information center, startup office.",
  "pain_point": "同時跑多個 AI agent 時，只能看一堆 log，很難知道誰在做什麼、卡在哪、花了多少 token。",
  "pain_point_en": "When several AI agents run at once, all you get is logs: hard to tell who is doing what, who is stuck, and how many tokens are spent.",
  "solution": "自訂事件協定，讓 Claude Code 透過 hooks 把動作送進事件中樞，前端用 3D 角色和對話泡泡呈現，並可在畫面上核准或駁回 agent 的請示。",
  "solution_en": "A custom event protocol: Claude Code sends its actions through hooks to an event hub, the front end renders them as 3D characters and speech bubbles, and you approve or reject agent requests on screen.",
  "ai_role": "多代理（Multi-agent）可視化與人機協作：設計 agent 接入協定，人類在畫面上審批 AI 的決策。",
  "ai_role_en": "Multi-agent visualization and human-in-the-loop control: an agent integration protocol where a human approves AI decisions on screen.",
  "tools": [
   "Claude Code hooks",
   "React Three Fiber",
   "Node.js",
   "SSE",
   "JSON Schema",
   "Tauri"
  ],
  "highlight": "7 位 Claude agent 協作示範、3 套主題",
  "highlight_en": "Demo of 7 Claude agents collaborating · 3 themes",
  "links": [
   {
    "type": "repo",
    "url": "https://github.com/singwillychen/agent-diorama"
   }
  ],
  "my_note": "純粹想讓 agent 的工作介面升級，也讓自己一個人開發時不那麼孤單。",
  "my_note_en": "I simply wanted a better interface for watching agents work, and to feel less alone when developing solo."
 },
 {
  "id": "ev2",
  "order": 3,
  "category": "ai",
  "status": "使用中",
  "name": "EV2 充電車位車牌監控",
  "name_en": "EV2 Charging Bay Plate Monitor",
  "summary": "每 10 分鐘自動讀取 6 個充電車位的車牌與現場照片，新車進場時把原圖和車牌推播到 Telegram，一鍵 ✅ 確認或直接打字更正，確認後自動填進 Google 表單對應的 10 分鐘時段。",
  "summary_en": "Every 10 minutes it reads the plates and live photos of 6 EV charging bays. When a new car arrives, the photo and plate are pushed to Telegram for a one-tap ✅ or a typed correction, then written into the matching 10-minute slot in Google Sheets.",
  "pain_point": "人工開單紀錄表每天 08:00–20:00、每 10 分鐘 6 格，整個月上萬格要靠人盯著後台抄車牌，容易漏抄、抄錯，也很耗時間。",
  "pain_point_en": "The manual log covers 6 bays every 10 minutes from 08:00 to 20:00, tens of thousands of cells a month copied by someone watching the admin screen: slow, and easy to miss or mistype.",
  "solution": "排程登入車位系統抓取車牌與照片，同一台車持續停放不重複詢問；多台車同時進場會排隊分批送出，沒確認前不寫入、也不會遺失。車牌自動轉大寫、去掉「-」，每晚 20:10 把空格補「無」。照片 48 小時後自動清除，部署在自家 QNAP NAS 的 Docker。",
  "solution_en": "A scheduler logs into the parking system for plates and photos and never asks twice about a car that stays parked; simultaneous arrivals queue up, and nothing is written or lost before confirmation. Plates are normalized, empty slots are filled nightly at 20:10, photos are purged after 48 hours, and it runs in Docker on a QNAP NAS.",
  "ai_role": "需求釐清、網頁結構分析與部署由 Claude Code 主導，程式本體由 Claude 子代理撰寫並附 51 項自動化測試；車牌辨識沿用車位系統既有的攝影機讀值，執行時不呼叫 AI、不耗 token。",
  "ai_role_en": "Claude Code led requirements, page-structure analysis and deployment, while a Claude sub-agent wrote the code with 51 automated tests; plate reading reuses the parking system's own camera values, so it runs with no AI calls and no token cost.",
  "tools": [
   "Node.js",
   "Express",
   "SQLite",
   "Cheerio",
   "Telegram Bot API",
   "LINE Messaging API",
   "Google Sheets API",
   "Docker",
   "QNAP NAS",
   "Claude Code"
  ],
  "highlight": "6 個車位、每天 438 格自動填寫、51 項測試",
  "highlight_en": "6 bays · 438 cells filled daily · 51 automated tests",
  "links": [],
  "my_note": "這是為台南區某個案場做的。過去每天 8 小時、每 10 分鐘就要盯一次網頁；上線後系統會自動收下所有資訊，推播時快速確認即可，也可以等接近下班時一次全部看完。",
  "my_note_en": "Built for a site in the Tainan area. Someone used to check a web page every 10 minutes for 8 hours a day; now the system collects everything, and staff confirm quickly when notified or review it all at once near the end of the day."
 },
 {
  "id": "jobsearch",
  "order": 4,
  "category": "ai",
  "status": "使用中",
  "name": "AI 求職工作台",
  "name_en": "AI Job Search Workspace",
  "summary": "以 Claude Code 為核心的求職工作區：評估職缺適配度、客製履歷與求職信、研究公司、準備面試，並自動抓取新職缺。",
  "summary_en": "A Claude Code–based job search workspace: scores job fit, tailors CVs and cover letters, researches companies, prepares interviews and pulls in new postings automatically.",
  "pain_point": "每投一份職缺都要重寫履歷、求職信、研究公司，重複又耗時，投遞進度也容易亂。",
  "pain_point_en": "Every application meant rewriting the CV and cover letter and researching the company: repetitive, slow, and hard to keep track of.",
  "solution": "把個人經歷寫成 Claude 可讀的檔案，依職缺語言自動切換中英文版本；自寫 JobFrog 爬蟲只抓新職缺，遵守 robots.txt；用 CSV 追蹤每筆投遞。",
  "solution_en": "My background is written as files Claude can read, with Chinese or English output chosen by the posting's language; a custom JobFrog scraper fetches only new postings and respects robots.txt; a CSV tracks every application.",
  "ai_role": "以開源 ai-job-search 框架改造成個人求職代理，AI 負責撰寫與研究，自己負責判斷與面試。",
  "ai_role_en": "Adapted the open-source ai-job-search framework into a personal job agent: AI writes and researches, I decide and interview.",
  "tools": [
   "Claude Code",
   "Python",
   "LaTeX",
   "Word",
   "JSON-LD scraping",
   "CSV"
  ],
  "highlight": "91 份履歷、68 封求職信、14 份公司研究",
  "highlight_en": "91 CVs · 68 cover letters · 14 company research files",
  "links": [],
  "my_note": "用了之後，確實能很有效率地收集各地的職缺資料，並和自己的履歷經驗逐一比對。",
  "my_note_en": "It genuinely made collecting job postings from many places efficient, and matching each one against my own experience."
 },
 {
  "id": "valuation",
  "order": 5,
  "category": "ai",
  "status": "訓練中",
  "name": "行將汽車估價系統",
  "name_en": "Used Car & Scooter Valuation Model",
  "summary": "以行將拍賣的實際成交資料訓練汽車、機車兩套獨立估價模型，輸入車款、年式、里程即得 NT$ 價格區間。",
  "summary_en": "Two separate pricing models (cars and scooters) trained on real auction sale prices: enter model, year and mileage to get an NT$ price range.",
  "pain_point": "二手車估價依賴個人經驗，同一台車不同人估差很多，也不容易判斷得標價划不划算。",
  "pain_point_en": "Used vehicle pricing depends on personal experience: estimates for the same car vary widely, and it is hard to judge whether a winning bid is a good deal.",
  "solution": "把拍賣 Markdown 檔解析成乾淨資料，訓練雙模型；提供 CP 值評分、最多 3 台並排比較、折舊曲線，並單獨處理里程不可用的車輛。",
  "solution_en": "Parses auction Markdown files into clean data and trains two models; adds a value-for-money score, side-by-side comparison of up to 3 vehicles, depreciation curves, and separate handling for vehicles with unusable mileage.",
  "ai_role": "從原始資料解析、特徵整理到模型訓練全流程由 AI 協作完成；目前 UI 以示範資料展示，預測 API 整合中。",
  "ai_role_en": "AI-assisted end to end, from parsing raw data and feature prep to model training; the UI currently shows sample data while the prediction API is being integrated.",
  "tools": [
   "Python",
   "Machine learning",
   "Data cleaning",
   "CSV",
   "Claude Code"
  ],
  "highlight": "汽車 3,328 筆、機車 250 筆成交資料",
  "highlight_en": "3,328 car and 250 scooter auction records",
  "links": [
   {
    "type": "repo",
    "url": "https://github.com/singwillychen/hjchen-auction-valuation"
   }
  ],
  "my_note": "資料來自官方每週拍賣的實際成交紀錄，都是真實的拍場價格。",
  "my_note_en": "The data comes from official weekly auction results, so every price is a real hammer price."
 },
 {
  "id": "vlog",
  "order": 6,
  "category": "ai",
  "status": "已完成",
  "name": "家庭遊記影片 Claude Skill",
  "name_en": "Family Trip Vlog — a Claude Skill",
  "summary": "把一趟家庭旅行的照片和影片，自動剪成 YouTube 長版與 IG Reels 短版：配合節拍剪接、運鏡、字幕、動態路線圖、知識小卡與免費授權音樂。",
  "summary_en": "Turns a family trip's photos and videos into a YouTube long cut and an IG Reels short: beat-synced cuts, Ken Burns motion, captions, an animated route map, knowledge cards and free-licensed music.",
  "pain_point": "出遊拍了幾百張照片和影片，想剪成影片卻沒時間學剪輯軟體，素材最後就躺在相簿裡。",
  "pain_point_en": "Hundreds of trip photos and clips end up sitting in the album, because there's no time to learn editing software.",
  "solution": "整條流程在本機跑：分析素材、偵測音樂節拍、用 PIL 合成畫面、交給 ffmpeg 編碼，不需要任何剪輯軟體；並把素材分類整理成資料夾。",
  "solution_en": "The whole pipeline runs locally: analyze media, detect music beats, compose frames with PIL and encode with ffmpeg, no editing software needed; media is also sorted into folders.",
  "ai_role": "把一次成功的剪片流程寫成 Claude Skill，之後丟一個資料夾，Claude 就能照同樣的品質重做。",
  "ai_role_en": "Captured a successful editing workflow as a reusable Claude Skill: hand Claude a folder and it repeats the same quality.",
  "tools": [
   "Claude Code Skills",
   "Python",
   "PIL",
   "ffmpeg",
   "librosa",
   "faster-whisper"
  ],
  "highlight": "一次產出 3 分 36 秒長版 + 45 秒 IG 短版",
  "highlight_en": "One run: a 3:36 long cut + a 45-second IG short",
  "links": [
   {
    "type": "video",
    "url": "https://youtu.be/-zroi4B9zMM"
   }
  ],
  "my_note": "以前剪一支遊記要花一週，利用下班時間熬夜慢慢剪。現在只要花二十分鐘寫 prompt：初剪把所有問題交代清楚，二剪處理音樂、標籤、轉場和不順的地方，通常三剪或四剪就是定稿。",
  "my_note_en": "A trip video used to take me a week of late nights after work. Now I spend about twenty minutes on prompts: the first cut surfaces every issue, the second fixes music, tags, transitions and rough spots, and the third or fourth cut is usually final."
 },
 {
  "id": "voicesprite",
  "order": 7,
  "category": "tools",
  "status": "已完成",
  "name": "VoiceSprite 聲線工坊",
  "name_en": "VoiceSprite Voice Studio",
  "summary": "朗讀 5 句台詞就能建立自己的聲線特徵檔，選一個動漫角色、輸入文字，角色就用你的聲線說話，還能直接帶進直播畫面（綠幕／透明背景）。",
  "summary_en": "Read 5 lines to create your voice profile, pick an anime character and type text: the character speaks in your voice, and can go straight into a livestream (green screen or transparent background).",
  "pain_point": "直播主和創作者想要角色配音，但請配音員貴、AI 語音模型又要安裝環境和顯卡，一般人用不起來。",
  "pain_point_en": "Streamers and creators want character voices, but voice actors are expensive and AI voice models need setup and a GPU most people don't have.",
  "solution": "整個流程放在瀏覽器裡：錄音、特徵擷取、文字轉語音都在本機完成，錄音不上傳；需要更像的音色時，可切換到瀏覽器內 AI 音色複製或本地開源引擎。",
  "solution_en": "Everything runs in the browser: recording, feature extraction and text-to-speech happen locally and recordings are never uploaded; for a closer match you can switch to in-browser AI voice cloning or a local open-source engine.",
  "ai_role": "三種語音引擎可切換（瀏覽器內建、WASM AI 音色複製、本地 GPT-SoVITS）；整個網站由 Claude Code 協作開發，含中英雙語。",
  "ai_role_en": "Three switchable voice engines (built-in browser voices, WASM AI voice cloning, local GPT-SoVITS); the whole bilingual site was built with Claude Code.",
  "tools": [
   "HTML / CSS / JS",
   "Web Speech API",
   "sherpa-onnx WASM",
   "ZipVoice",
   "GPT-SoVITS",
   "Python",
   "IndexedDB",
   "GitHub Pages",
   "Claude Code"
  ],
  "highlight": "4 個頁面、3 種語音引擎、中英雙語",
  "highlight_en": "4 pages · 3 voice engines · bilingual",
  "links": [
   {
    "type": "demo",
    "url": "https://singwillychen.github.io/voicesprite/"
   },
   {
    "type": "repo",
    "url": "https://github.com/singwillychen/voicesprite"
   }
  ],
  "my_note": "一個下午就完成的作品。做完才發現這個領域已經有 ElevenLabs 這樣的知名品牌，所以我把它定位在童趣：可以和小朋友一起玩變聲遊戲。實際使用建議從第二階段的本地小型模型開始，或安裝第三階段的大型模型，音色和音調才會有明顯變化。",
  "my_note_en": "Built in a single afternoon. Afterwards I found that well-known brands like ElevenLabs already own this space, so I positioned it as something playful: a voice-changing game to enjoy with kids. For a noticeable change in timbre and pitch, start from the stage-2 local small model or install the stage-3 large model."
 },
 {
  "id": "foms",
  "order": 8,
  "category": "tools",
  "status": "已完成",
  "name": "FOMS 現場作業管理系統 v2.1",
  "name_en": "FOMS — Field Operation Management System v2.1",
  "summary": "給現場作業人員用的系統，涵蓋設備部署、安置、維修保養與料件管理，依 Operations Specialist 的實際工作流程設計。",
  "summary_en": "A system for field operators covering equipment deployment, installation, maintenance and parts management, modeled on an Operations Specialist's real workflow.",
  "pain_point": "現場設備部署、保養、領料靠紙本和 Excel，交班常漏資訊，設備履歷和庫存不同步，驗收單要另外手寫。",
  "pain_point_en": "Deployment, maintenance and parts were tracked on paper and in Excel: handovers missed details, equipment history and stock drifted apart, and acceptance forms were handwritten.",
  "solution": "8 步驟部署流程每打一個勾就自動更新設備狀態；保養工單自動帶入型號檢查表，未完成不能結案；領料扣庫存、缺料轉待料；交班摘要一鍵複製。",
  "solution_en": "An 8-step deployment flow updates equipment status with each checkmark; maintenance orders load the model's checklist and can't close until done; parts issues deduct stock and shortages go on hold; shift summaries copy in one click.",
  "ai_role": "用 Claude Code 把真實工作流程轉成系統規格與程式，不需後端，手機加入主畫面即可當 App。",
  "ai_role_en": "Used Claude Code to turn a real workflow into specs and code; no back end needed, and it installs to a phone's home screen as an app.",
  "tools": [
   "HTML / CSS / JS",
   "PWA (offline)",
   "Service Worker",
   "GPS",
   "Code 39 barcodes",
   "Claude Code"
  ],
  "highlight": "8 步驟部署流程、P1–P3 工單、可離線使用",
  "highlight_en": "8-step deployment flow · P1–P3 work orders · works offline",
  "links": [],
  "my_note": "源自我在鳴日科技跑外勤時遇到的實際需求：把現場作業（Field Operation）的設備部署、保養與料件管理，整理成一套現場人員拿手機就能用的系統。",
  "my_note_en": "It grew out of real needs I met doing field work at Tomorrowland Technology: bringing equipment deployment, maintenance and parts management into one system field staff can use from a phone."
 },
 {
  "id": "highway",
  "order": 9,
  "category": "tools",
  "status": "已完成",
  "name": "高速公路塞不塞 HighwayChecker",
  "name_en": "HighwayChecker",
  "summary": "輸入起訖點（可細到交流道或地標），一次看兩地之間各條國道的壅塞程度。",
  "summary_en": "Enter a start and end point (down to an interchange or landmark) and see congestion on every freeway between them at once.",
  "pain_point": "出門前想比較國 1、國 3 哪條比較不塞，得開好幾個 App 或網站逐段看。",
  "pain_point_en": "Comparing Freeway 1 and Freeway 3 before a trip meant checking several apps or sites section by section.",
  "solution": "前端可純靜態展示；加上後端後接交通部 TDX 即時車速，API 金鑰只放在後端，用 Docker 部署到自家 NAS。",
  "solution_en": "The front end works as a static demo; with the back end it uses live speeds from Taiwan's TDX transport API, keeps the API key server-side, and deploys to a home NAS with Docker.",
  "ai_role": "Claude Code 協作串接政府開放資料 API、設計後端代理與部署流程。",
  "ai_role_en": "Built with Claude Code: government open-data API integration, a back-end proxy and the deployment flow.",
  "tools": [
   "TDX API",
   "Node.js",
   "Docker Compose",
   "QNAP NAS",
   "GitHub Pages",
   "Claude Code"
  ],
  "highlight": "TDX 介接後端已寫好，規劃改用國道影像辨識",
  "highlight_en": "TDX back end written · freeway camera image recognition planned",
  "links": [
   {
    "type": "demo",
    "url": "https://singwillychen.github.io/HighwayChecker/"
   },
   {
    "type": "repo",
    "url": "https://github.com/singwillychen/HighwayChecker"
   }
  ],
  "my_note": "從朋友的產品「雪隧哨兵」觸類旁通而來。串接交通部 TDX 時發現可能需要付費，所以目前還沒接上即時資料；下一步考慮改用國道公開的即時影像，做簡單的影像辨識來達到同樣目的。",
  "my_note_en": "Inspired by a friend's product, Snow Tunnel Sentinel. While integrating TDX I found it may require payment, so live data isn't connected yet; next I'm considering simple image recognition on public freeway camera feeds to reach the same goal."
 },
 {
  "id": "lottery",
  "order": 10,
  "category": "tools",
  "status": "已完成",
  "name": "彩券期望值計算器 LotteryWin",
  "name_en": "LotteryWin — Lottery Expected Value Calculator",
  "summary": "計算台灣彩券大樂透、威力彩、今彩539、三星彩、四星彩目前的期望值，告訴你「現在買哪一種最划算」。",
  "summary_en": "Computes the current expected value of Taiwan's five main lottery games and tells you which one is the best buy right now.",
  "pain_point": "大家看頭獎金額決定要不要買，但頭獎多少才划算、扣稅後實拿多少，很少人算得清楚。",
  "pain_point_en": "People decide by the jackpot size, but few can work out when a jackpot is actually worth it, or what they'd take home after tax.",
  "solution": "依各獎級機率與稅後獎金算期望值並排行，算出頭獎要累積到多少才打平；用 Poisson 分布估計頭獎被平分的機率；可自動抓官方開獎資料。",
  "solution_en": "Ranks games by expected value from each prize tier's odds and after-tax payout, shows the break-even jackpot, estimates jackpot sharing with a Poisson model, and can fetch official draw results.",
  "ai_role": "用 Claude Code 把機率、稅制與分獎模型寫成可測試的計算核心。",
  "ai_role_en": "Used Claude Code to turn odds, tax rules and a prize-sharing model into a tested calculation core.",
  "tools": [
   "HTML / CSS / JS",
   "Python",
   "Probability & statistics",
   "Claude Code"
  ],
  "highlight": "5 種彩券期望值排行、含稅與平分估算",
  "highlight_en": "Expected value ranking for 5 games, with tax and jackpot sharing",
  "links": [],
  "my_note": "主要是幫我找出獲勝期望值最好的選擇。威力彩頭獎累積到一定金額時，它會告訴我是否值得從大樂透改買威力彩，以取得更好的期望值。",
  "my_note_en": "It points me to the choice with the best expected value. When the Super Lotto jackpot builds past a certain amount, it tells me whether switching from Lotto 6/49 to Super Lotto is worth it."
 },
 {
  "id": "webdownloader",
  "order": 11,
  "category": "tools",
  "status": "已完成",
  "name": "WebDownloader 續傳下載管理器",
  "name_en": "WebDownloader — Resumable Download Manager",
  "summary": "跨平台的 HTTPS 下載管理器：斷點續傳、多工並行、暫停與繼續，有深色主題介面，也能用命令列批次下載。",
  "summary_en": "A cross-platform HTTPS download manager with resume, parallel downloads and pause/continue, a dark-theme GUI, and a command-line batch mode.",
  "pain_point": "大檔案下載到一半斷線就得重來，公司自簽憑證或 Proxy 環境下，一般瀏覽器下載也常失敗。",
  "pain_point_en": "Large downloads restart from zero when the connection drops, and browser downloads often fail behind corporate self-signed certificates or proxies.",
  "solution": "用 HTTP Range 請求續傳，暫存檔自動保留；可設定 1–10 個並行任務、每個任務指定 Proxy；Windows、macOS、Linux 字型自動適配。",
  "solution_en": "Resumes with HTTP Range requests and keeps partial files; runs 1–10 parallel tasks with per-task proxies; adapts fonts for Windows, macOS and Linux.",
  "ai_role": "以 AI 協作完成跨平台 GUI 與網路錯誤處理。",
  "ai_role_en": "Built with AI assistance, including the cross-platform GUI and network error handling.",
  "tools": [
   "Python",
   "Tkinter",
   "requests",
   "HTTP Range"
  ],
  "highlight": "斷點續傳、1–10 並行、三平台",
  "highlight_en": "Resume · 1–10 parallel downloads · 3 platforms",
  "links": [],
  "my_note": "主要用來下載 Helikon-Tex 的所有產品內容。之後會把它封裝成可安裝的程式，並加強下載介面的顯示，讓它不必只在終端機操作。",
  "my_note_en": "I mainly use it to download all of Helikon-Tex's product content. Next I'll package it as an installable app and improve the download interface, so it no longer needs the terminal."
 },
 {
  "id": "ww-platform",
  "order": 12,
  "category": "ecommerce",
  "status": "開發中",
  "name": "週末戰士營運管理平台",
  "name_en": "Weekend Warrior Operations Platform",
  "summary": "自營進口運動器材電商的後台：商品資訊庫、客戶往來、掃描槍匯入、定價計算、政府報價單、快速查價。",
  "summary_en": "The back office for my imported outdoor gear store: product database, customer records, barcode-scanner import, pricing engine, government quotations and quick price lookup.",
  "pain_point": "進口商品定價要手動換匯、算關稅、貨物稅和毛利，報價單和價格散在多個 Excel，查一個價要翻好幾份檔。",
  "pain_point_en": "Import pricing meant converting currency and calculating duty, excise and margin by hand; quotations and prices were scattered across many Excel files.",
  "solution": "定價引擎自動換算 EUR/USD → TWD 並套用稅費與毛利；報價單輸出 Word／PDF；中英文與 SKU 模糊查價；機密經銷價加密，部署在自家 NAS。",
  "solution_en": "A pricing engine converts EUR/USD to TWD and applies duties and margin; quotations export to Word/PDF; fuzzy search by Chinese, English or SKU; confidential dealer prices are encrypted; hosted on my own NAS.",
  "ai_role": "以 Claude Code 從需求拆解到可部署的容器架構，把自己經營 9 年電商的流程數位化。",
  "ai_role_en": "Used Claude Code to go from requirements to a deployable container setup, digitizing workflows from 9 years of running the store.",
  "tools": [
   "FastAPI",
   "PostgreSQL",
   "Nginx",
   "Docker Compose",
   "Cloudflare Tunnel",
   "QNAP NAS",
   "Claude Code"
  ],
  "highlight": "7 個模組、NAS 自架、遠端安全存取",
  "highlight_en": "7 modules · self-hosted on a NAS · secure remote access",
  "links": [
   {
    "type": "repo",
    "url": "https://github.com/singwillychen/weekend-warrior"
   }
  ],
  "my_note": "經營電商以來最花時間的有兩件事：一是整理每次更新的報價單，二是整理每個月的新訂單與出貨。",
  "my_note_en": "Two things have taken the most time since I started the store: updating quotations every time prices change, and handling each month's new orders and shipping."
 },
 {
  "id": "ecommerce-arch",
  "order": 13,
  "category": "ecommerce",
  "status": "文件",
  "name": "自架電商架構分析",
  "name_en": "Self-Hosted E-commerce Architecture Study",
  "summary": "拆解現有 EasyStore 前台與後台，提出脫離平台、自架多品牌電商的架構與路線。",
  "summary_en": "A teardown of my current EasyStore storefront and admin, with an architecture and roadmap for moving to a self-hosted multi-brand store.",
  "pain_point": "綁在 SaaS 電商平台上難客製，而且真正的銷售在蝦皮、露天，官網沒在賣，多通路商品資料各管各的。",
  "pain_point_en": "A SaaS store is hard to customize, real sales happen on marketplaces like Shopee and Ruten rather than my own site, and product data is managed separately per channel.",
  "solution": "由 AI 實際測試前台、唯讀檢視後台，整理成可驗證的事實；建議以 Medusa v2 當核心、自做 Admin 與台灣在地模組，並先做商品主檔與多通路整合。",
  "solution_en": "AI tested the storefront and reviewed the admin read-only, recording verifiable facts; the recommendation is Medusa v2 as the core with a custom admin and Taiwan-specific modules, starting with a product master and multi-channel sync.",
  "ai_role": "讓 AI 當系統分析師：實測、拆解、比較方案、寫成可交給 Claude Code 實作的規格。",
  "ai_role_en": "AI as systems analyst: test, deconstruct, compare options and write a spec Claude Code can implement.",
  "tools": [
   "Claude",
   "Browser testing",
   "Medusa v2",
   "Architecture docs"
  ],
  "highlight": "結論先行、區分事實與推論",
  "highlight_en": "Conclusions first · facts kept apart from inferences",
  "links": [],
  "my_note": "我希望參考目前成熟的產品來搭建，但最重要的是資訊安全：網站架構要不易被攻破，客戶資料不能被取得。比起這一點，其他銷售功能的問題都小得多。",
  "my_note_en": "I want to build on proven products, but security comes first: the architecture must be hard to breach and customer data must stay protected. Every other sales feature is a much smaller problem."
 },
 {
  "id": "dealer-price",
  "order": 14,
  "category": "ecommerce",
  "status": "已完成",
  "name": "經銷商報價批次更新",
  "name_en": "Dealer Price List Batch Update",
  "summary": "把 8 家代理品牌（Helikon-Tex、Morakniv、Direct Action 等）的原廠價格表整理成統一格式，並產出電商平台可匯入的商品檔。",
  "summary_en": "Normalizes price lists from 8 brands I distribute (Helikon-Tex, Morakniv, Direct Action and more) into one format and produces an import file for the online store.",
  "pain_point": "每家原廠價格表格式不同，每次調價都要人工對 SKU、換算、再一筆筆更新上架，容易出錯。",
  "pain_point_en": "Each brand's price list has its own format, so every price change meant matching SKUs, converting and updating listings one by one, which invites mistakes.",
  "solution": "用 AI 讀取各家 Excel、統一欄位，算出售價，輸出 EasyStore 匯入 CSV，並另列缺價商品清單供人工確認；整理成每季可重複執行的 Claude Skill。",
  "solution_en": "AI reads each brand's Excel file, unifies the columns, calculates retail prices and outputs an EasyStore import CSV, plus a list of items missing prices for manual review; packaged as a Claude Skill to rerun each quarter.",
  "ai_role": "AI 處理格式不一的表格資料，人只需確認例外清單。",
  "ai_role_en": "AI handles inconsistent spreadsheets; I only review the exceptions.",
  "tools": [
   "Claude",
   "Claude Code Skills",
   "Excel",
   "Python",
   "Google Sheets"
  ],
  "highlight": "8 家品牌一次更新",
  "highlight_en": "8 brands updated in one pass",
  "links": [],
  "my_note": "經銷商報價更新與資料清洗大約每季做一次，傳統用 Excel 手動剪貼的方式非常耗時。",
  "my_note_en": "Dealer price updates and data cleaning happen roughly every quarter, and the traditional copy-and-paste approach in Excel took a very long time."
 },
 {
  "id": "ipas",
  "order": 15,
  "category": "learning",
  "status": "已完成",
  "name": "iPAS 書齋：AI 應用規劃師模擬考",
  "name_en": "iPAS Study Hall — AI Application Planner Exam Simulator",
  "summary": "iPAS「AI 應用規劃師」初級／中級模擬考系統：亂數或弱項加重出題、逐選項錯題解析、學習五力圖、出席日曆，還有一位會依你的數據說話的 8-bit 老學究。",
  "summary_en": "A practice exam system for Taiwan's iPAS AI Application Planner certificate (beginner and intermediate): random or weakness-weighted questions, per-option explanations, a five-skill radar, an attendance calendar and an 8-bit tutor who comments on your stats.",
  "pain_point": "準備 iPAS 考試只能翻講義、做紙本題，不知道自己哪一科弱，錯過的題也很難集中複習。",
  "pain_point_en": "Preparing for iPAS meant handouts and paper questions, with no way to see weak areas or revisit missed questions in one place.",
  "solution": "195 題題庫，每個選項都有解析；交卷後在伺服器端批改，答案不外露到前端；錯題本自動收錄、答對即畢業；Dashboard 顯示五力圖與連續出席天數。",
  "solution_en": "A 195-question bank with an explanation for every option; grading runs server-side so answers never reach the browser; a mistake log adds wrong answers and retires them once correct; the dashboard shows a five-skill radar and streaks.",
  "ai_role": "用 Claude Code 設計題庫結構、資料庫權限與端對端測試；老師角色依學習數據即時產生一句話，沒有 LLM 金鑰時改用內建語錄。",
  "ai_role_en": "Used Claude Code for the question bank schema, database permissions and end-to-end tests; the tutor generates a line from your learning data, falling back to built-in quotes without an LLM key.",
  "tools": [
   "HTML / CSS / JS",
   "Supabase Auth",
   "PostgreSQL + RLS",
   "Edge Functions",
   "LLM",
   "Playwright",
   "Claude Code"
  ],
  "highlight": "195 題、5 個科目、伺服器端批改",
  "highlight_en": "195 questions · 5 subjects · server-side grading",
  "links": [
   {
    "type": "repo",
    "url": "https://github.com/singwillychen/ipas-exam-sim"
   }
  ],
  "my_note": "我自己正在準備這個考試，還沒正式開始讀；試用後覺得題目內容不錯，之後會依自己的需求繼續加強。",
  "my_note_en": "I'm preparing for this exam myself and haven't started studying in earnest; after trying it, I think the questions are solid, and I'll keep improving it as my needs grow."
 },
 {
  "id": "mathcastle",
  "order": 16,
  "category": "learning",
  "status": "已完成",
  "name": "Kid's Math Castle 數學城堡",
  "name_en": "Kid's Math Castle",
  "summary": "給 4–7 歲小朋友的互動式加減法與心算練習網站：數蘋果、十格框、數線跳跳、心算、算盤教室，還有語音唸題。",
  "summary_en": "An interactive addition, subtraction and mental math site for ages 4–7: counting apples, ten-frames, number-line jumps, mental math, an abacus class and read-aloud questions.",
  "pain_point": "小朋友練數學需要大人一直陪著出題、批改，也很難知道孩子到底哪種題型比較弱。",
  "pain_point_en": "Kids practicing math need an adult to set and check every question, and it's hard to see which kinds of problems they struggle with.",
  "solution": "每位小朋友有自己的帳號與星星；依年齡調整難度；家長專區用乘法題或密碼進入，可看答對率、弱點建議與答錯題目；紀錄可存在瀏覽器、NAS 或雲端硬碟資料夾。",
  "solution_en": "Each child has their own profile and stars; difficulty follows age; a parent area (unlocked by a multiplication question or password) shows accuracy, weak spots and missed questions; progress saves to the browser, a NAS or a cloud-synced folder.",
  "ai_role": "用 Claude Code 從親子需求出發設計題型與家長分析，並讓多台平板共用紀錄。",
  "ai_role_en": "Built with Claude Code from a parent's needs: exercise types, parent analytics, and shared progress across several tablets.",
  "tools": [
   "HTML / CSS / JS",
   "Web Speech API",
   "Python",
   "GitHub Pages",
   "Claude Code"
  ],
  "highlight": "6 種練習模式、家長分析、線上可玩",
  "highlight_en": "6 practice modes · parent analytics · playable online",
  "links": [
   {
    "type": "demo",
    "url": "https://singwillychen.github.io/kids-math-castle/"
   },
   {
    "type": "repo",
    "url": "https://github.com/singwillychen/kids-math-castle"
   }
  ],
  "my_note": "小朋友已經試玩過一次，最近比較忙還沒持續使用，之後會再多陪他們一起玩。",
  "my_note_en": "My kids have tried it once; things have been busy so we haven't kept it up yet, and I plan to play it with them more."
 },
 {
  "id": "growup",
  "order": 17,
  "category": "learning",
  "status": "MVP",
  "name": "Grow Up 孩子成長時間軸",
  "name_en": "Grow Up — Child Growth Timeline",
  "summary": "從相簿自動找出每週或每月最清楚的一張照片，排成孩子的成長時間軸，家人可以一起寫註解，之後可輸出成小影片。",
  "summary_en": "Finds the clearest photo of each week or month in the photo library, lays them out as a child's growth timeline that family can annotate together, with video export planned.",
  "pain_point": "手機裡有上萬張孩子的照片，想回顧成長卻找不到重點，好照片也被大量連拍和截圖淹沒。",
  "pain_point_en": "Tens of thousands of photos on the phone, yet the milestones are hard to find, buried under burst shots and screenshots.",
  "solution": "iPhone App 在手機上用 Vision 評分、比對參考臉，只上傳候選照片；後端做完全與近似去重、推測拍攝時間；分享連結有隨機代碼加密碼與錯誤鎖定。個資只存在自家 NAS。",
  "solution_en": "An iPhone app scores photos and matches a reference face on-device with Vision, uploading only candidates; the back end removes exact and near duplicates and infers capture time; share links use random codes plus a PIN with lockout. Personal data stays on my own NAS.",
  "ai_role": "用 Claude Code 同時開發後端、網頁與 iOS App，並把隱私與安全設計放在第一位。",
  "ai_role_en": "Used Claude Code across the back end, web app and iOS app, with privacy and security designed in from the start.",
  "tools": [
   "FastAPI",
   "PostgreSQL",
   "React + Vite + TS",
   "SwiftUI",
   "Apple Vision",
   "Supabase Auth",
   "Cloudflare Tunnel",
   "QNAP NAS",
   "Claude Code"
  ],
  "highlight": "手機端 AI 挑圖、照片去重、私密分享連結",
  "highlight_en": "On-device photo picking · duplicate removal · private share links",
  "links": [],
  "my_note": "想記錄孩子們成長的小瞬間：有時會發現他們的用詞或動作，在一瞬間變得更成熟。我希望把這份感動留下來，不定期串成影片，和家人一起分享。",
  "my_note_en": "A way to capture my children's small moments of growth: sometimes their words or gestures suddenly seem more grown-up. I want to keep those moments and, from time to time, turn them into a video to share with family."
 },
 {
  "id": "cruise",
  "order": 18,
  "category": "learning",
  "status": "開發中",
  "name": "郵輪特價追蹤 Cruise Bargain Tracker",
  "name_en": "Cruise Bargain Tracker",
  "summary": "追蹤兩大郵輪訂位網站的亞洲航線價格，自動評分找出特價，每週用 Telegram 推送摘要。",
  "summary_en": "Tracks Asian cruise prices on two major booking sites, scores them to find real deals, and sends a weekly Telegram digest.",
  "pain_point": "郵輪價格天天變動，要比較不同網站、判斷是不是真的便宜，得自己反覆查價、記價格。",
  "pain_point_en": "Cruise prices change daily; telling whether a deal is real across different sites means checking and noting prices over and over.",
  "solution": "評分引擎比較同類航次、跌價、歷史新低、跨站價差與尾艙；網頁顯示今日推薦與價格走勢，美金價自動換算台幣；每日排程並做抓取健康檢查。",
  "solution_en": "A scoring engine compares similar sailings, price drops, record lows, cross-site gaps and last-minute cabins; the web app shows daily picks and price trends with USD converted to TWD; daily scheduling with scraper health checks.",
  "ai_role": "用 Claude Code 設計評分邏輯與排程架構，抓取模組以示範資料先跑通整個流程。",
  "ai_role_en": "Used Claude Code to design the scoring logic and scheduling; the whole pipeline runs end to end on sample data while the scrapers are finished.",
  "tools": [
   "Python",
   "FastAPI",
   "SQLAlchemy",
   "APScheduler",
   "Playwright",
   "Telegram Bot",
   "Docker"
  ],
  "highlight": "5 種特價評分規則、每週自動推播",
  "highlight_en": "5 deal-scoring rules · automatic weekly digest",
  "links": [
   {
    "type": "repo",
    "url": "https://github.com/singwillychen/Finding-good-bargain-cruise"
   }
  ],
  "my_note": "目前還在累積價格資料，還沒實際用它訂到行程；等時間和預算允許，再靠它找划算的郵輪行程。",
  "my_note_en": "It's still building up price history, and I haven't booked a trip with it yet; when time and budget allow, I'll use it to find a good-value cruise."
 }
];
