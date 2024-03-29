const fs = require("fs");
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const port = 3000;

app.use(
  "/api",
  createProxyMiddleware({ target: "http://localhost:3001", changeOrigin: true })
);

app.use(express.static(__dirname + "/dist"));

app.get("*", (req, res) => {
  console.log("请求来了!");
  if (fs.existsSync(__dirname + "/dist/index.html")) {
    res.sendFile(__dirname + "/dist/index.html");
  } else {
    res.send("路径错误或正在构建中");
  }
});

app.listen(port, () => {
  console.log(`Blog listening at http://localhost:${port}`);
});
