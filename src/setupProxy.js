const HttpsProxyAgent = require("https-proxy-agent");
const { createProxyMiddleware } = require("http-proxy-middleware");

// corporate proxy to connect to
const proxyServer =
  process.env.REACT_APP_HTTPS_PROXY || process.env.REACT_APP_HTTP_PROXY;

const options = {
  target: "https://daiz.netlify.app",
  agent: new HttpsProxyAgent(proxyServer),
};

const apiProxy = createProxyMiddleware(options);

module.exports = function (app) {
  app.use("/api", apiProxy);
};
