## HTTP Challenge 練習
網址: [https://lidemy-http-challenge.herokuapp.com/start](https://lidemy-http-challenge.herokuapp.com/start)  
以此記錄了通關的心得及需要注意的地方，收益良多！

---

### 第一關
- 透過 `GET` 方法獲取 API 文件

### 第二關
- 同第一題，只是多帶了一個 `id` 的參數對伺服器做 `GET` 請求

### 第三關
- 透過 `POST` 的方法對伺服器做新增書籍的動作，因為 `axios` header 裡的 `Content-Type` 預設是使用 ` application/json`，所以要特別設定成 `application/x-www-form-urlencoded`，再透過 `URLSearchParams` 這個物件實體包住才能正常送出。

### 第四關
- 先用 `GET` 調用文件的查詢 API，找到符合題目條件的書後再做第二次 `GET` 請求把 id 回傳就可以到下一關了。

### 第五關
- 依照題目給的 id 調用 `DELETE` 方法，結案

### 第六關
- 補充：[HTTP驗證](https://carsonwah.github.io/http-authentication.html)
- 這題開始換新文件，在 request 的 header 補上 basic authorization 後對伺服器發送 `GET` 請求，拿到 email 後再 `GET` 一次就過關了。  
之前都是用 jwt 比較多，js 轉 base64 的方法比起 `btoa` 更推薦用 `Buffer.from(auth).toString('base64')`，因為前者不支援utf-8 。

### 第七關
- 方法同第五關，只是要在 header 裡補上驗證。

### 第八關
- 方法同第四關，只差在了點跟要在 header 上補上驗證。

### 第九關
- 在 header 裡 帶入 `X-Library-Number` 跟 `User-Agent` 的資訊對伺服器做 `GET` 請求，這裡要注意不能從瀏覽器發送，不然會強迫以瀏覽器的為主。

### 第十關
- 猜猜樂的趣味關卡，猜個正確的 id 對伺服器做 `GET` 請求。

### 第十一關
- 補充: [CORS](https://shubo.io/what-is-cors/)
- 補充: [CORS解法](https://github.com/aszx87410/blog/issues/69)
- 這裡開始文件換成第三版了，這關要把 `Origin` 設為 `lidemy.com` 才能解決跨域的問題，跟第九關一樣，要設定 `Origin` 不能從瀏覽器發送，除非用補充解法中的其中一個辦法解決 CORS 問題。

### 第十二關
- 對 api 給的網址做 `GET` 會發現 response 說已經給了提示，但找了很久找不到。我使用 `axios` 作為發請求的工具，發現 `_redirectCount: 2`，知道被轉址後帶入參數 `maxRedirects: 0` 去阻止轉址，然後就可以在 response header 中找到解答。

### 第十三關
- 補充: [正確取得 IP](https://devco.re/blog/2014/06/19/client-ip-detection/)
- 照題目給的指示去做 `GET` 後，伺服器會要求你的 IP 必須來自菲律賓，只要在 header 中帶入 `X-Forwarded-For` google 上找到的菲律賓免費 IP 就拿得到資料了。

### 第十四關
- [User-Agent 列表](https://perishablepress.com/list-all-user-agents-top-search-engines)
- 方法同第九題，差在 `User-Agent` 要使用 與 google/bot 同款的，在列表上隨便選一個就可以。

### 第十五關

- 對 server 發一個 `GET` 請求就過關囉！

---

## 後記
這幾個關卡真的有複習到對 http 的操作，還學會了平常不太用得到的操作。之前還有遇過一個情況是後端抓不到前端 request 的 cookies，原因是出在沒有送出 credentials，以 `axios` 來說，只要在參數帶入 `withCredentials: true` 就可以解決了。

