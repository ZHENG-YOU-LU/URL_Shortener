# URL_Shortener
# 短網址產生器

可以將較長的網址縮成較短的「短網址產生器」

## 功能列表

- 輸入網址轉換成短網址
- 點擊 copy 複製短網址
- 透過短網址轉址到原本網址

## 畫面預覽



## 安裝
1. 複製專案，在終端機輸入：
```
git clone https://github.com/ZHENG-YOU-LU/URL_Shortener
```
2. 進入專案資料夾，在終端機輸入：
```
cd URL_Shortener
```
3. 安裝`npm`套件。在終端機輸入：
```
npm init -y
```
4. 設定暫時環境變數以連接 MongoDB 資料庫，請在終端機輸入：
```
export MONGODB_URI_URLSHORTENER = "mongodb+srv://您的帳號:您的密碼@cluster0.euvhff2.mongodb.net/URL_Shortener-list?retryWrites=true&w=majority"
```
5. 執行專案。在終端機輸入：
```
npm run dev
```
6. 於瀏覽器網址列輸入：
```
localhost:3000
```
## 使用工具

- [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) - 開發環境
- [Express](https://www.npmjs.com/package/express) - 應用程式架構
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - 模板引擎
- [Mongodb](https://account.mongodb.com/) - 文件資料庫
- [Mongoose](https://mongoosejs.com/) - 操作 MongoDB 的 ODM
- [Robo 3T](https://blog.robomongo.org/studio3t-free/) - 查看資料庫圖形介面

## 開發者

- [ZHENG-YOU-LU](https://github.com/ZHENG-YOU-LU)