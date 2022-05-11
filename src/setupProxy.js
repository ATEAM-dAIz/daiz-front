// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     createProxyMiddleware("/api", {
//       target: process.env.REACT_APP_HTTPS_PROXY,
//       changeOrigin: true,
//       pathRewrite: {
//         "^/api": "", // URL ^/api -> 공백 변경
//       },
//       router: {
//         "https://daiz.netlify.app/api": "https://ateam-server.tk",
//       },
//       secure: false,
//     })
//   );
// };

var HttpsProxyAgent = require("https-proxy-agent");
var proxy = require("http-proxy-middleware");

// corporate proxy to connect to via environment variables
var proxyServer =
  process.env.REACT_APP_HTTPS_PROXY || process.env.REACT_APP_HTTP_PROXY;

var options = {
  target: "https://daiz.netlify.app", //Proxy url
  agent: new HttpsProxyAgent(proxyServer), //The actual corporate proxy sever
  pathRewrite: {
    "^/api": "", // URL ^/api -> 공백 변경
  },
};

var apiProxy = proxy("/api", options);

module.exports = function (app) {
  app.use("/api/ae", apiProxy);
};
