# WG小工具（網頁版）

由 Unity 版 `WGPerformanceCalculator` 移植的純靜態網頁，可直接以 GitHub Pages 免費架設。

## 功能
- 日期（預設今天，可「跳回今天」）、LTD、MTD、目標業績 Goal（可從預設清單選擇）
- 計算 PROJ、達成率 %、DailyNeed、今日達標所需
- LTD / MTD / Goal 自動保存在瀏覽器（localStorage）
- 右上「公式」顯示計算公式

## 公式
| 項目 | 公式 |
|---|---|
| PROJ | MTD / 已過天數 × 當月天數 |
| % | PROJ / Goal |
| DailyNeed | (Goal − MTD) / 剩餘天數（月底最後一天顯示「月底已到」） |
| 今日達標所需 | Goal / 當月天數 × 已過天數 − MTD |

## 部署到 GitHub Pages
1. 在 GitHub 建立新的 repository（例如 `wg-calculator`），設為 Public。
2. 將本資料夾內容推上去：
   ```bash
   git init
   git add .
   git commit -m "WG小工具網頁版"
   git branch -M main
   git remote add origin https://github.com/<帳號>/wg-calculator.git
   git push -u origin main
   ```
3. 到 repository 的 **Settings → Pages**，Source 選 **Deploy from a branch**，Branch 選 `main` / `/ (root)`，按 Save。
4. 稍待片刻後即可在 `https://<帳號>.github.io/wg-calculator/` 使用。

## 本機預覽
```bash
python -m http.server 5173
```
然後開啟 http://localhost:5173 。
