# Node.js Survey Handler

## 簡介
此專案是用於處理來自SurveyCake的調查結果的Node.js Lambda函數。它能夠解密調查數據，檢查調查是否完整，並根據結果重定向用戶到相應的URL。

## 功能
- 接收調查數據的SVID和HASH參數。
- 使用AES-128-CBC進行解密，以獲取調查結果。
- 檢查所有答案是否完整，並基於檢查結果進行重定向。
- 提供301重定向至指定的URLs。

## 安裝與使用方式
1. 確保您已安裝Node.js和npm。
2. 克隆這個倉庫到本地：
   ```bash
   git clone https://github.com/yourusername/survey-handler.git
   ```
3. 進入專案目錄：
   ```bash
   cd survey-handler
   ```
4. 安裝必須的依賴模組：
   ```bash
   npm install
   ```
5. 部署此Lambda函數至AWS Lambda或其他支持Node.js的伺服器。
6. 在調用此函數時，確保包含`svid`和`hash`作為查詢字符串參數。

## 必要的依賴模組清單
- `axios`: 用於發送HTTP請求。
- `crypto`: Node.js內置模組，用於加密和解密操作。

## 授權條款
本專案以MIT授權條款發佈，詳情請參見 `LICENSE` 文件。

```
請將`yourusername`替換為你的GitHub使用者名稱，並根據需要修改專案的其他部分以符合你的要求。