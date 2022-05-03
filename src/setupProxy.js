const { createProxyMiddleware } = require("http-proxy-middleware");

const proxy = {
  target: "https://ateam-server.tk",
  changeOrigin: true,
  pathRewrite: {
    "^/api": "", // URL ^/api -> 공백 변경
  },
  secure: false,
};
module.exports = function (app) {
  app.use("/api", createProxyMiddleware(proxy));
};
