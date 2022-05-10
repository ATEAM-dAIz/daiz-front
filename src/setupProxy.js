const HttpsProxyAgent = require("https-proxy-agent");
const { createProxyMiddleware } = require("http-proxy-middleware");

// corporate proxy to connect to
const proxyServer = "https://ateam-server.tk" || "http://ateam-server.tk";

const options = {
  target: "https://daiz.netlify.app",
  agent: new HttpsProxyAgent(proxyServer),
};

const apiProxy = createProxyMiddleware(options);

module.exports = function (app) {
  app.use("/api", apiProxy);
};
