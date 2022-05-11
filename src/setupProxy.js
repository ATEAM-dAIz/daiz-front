const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: process.env.REACT_APP_HTTPS_PROXY,
      changeOrigin: true,
      pathRewrite: {
        "^/\\api": "", // URL ^/api -> 공백 변경
      },
      secure: false,
    })
  );
};
