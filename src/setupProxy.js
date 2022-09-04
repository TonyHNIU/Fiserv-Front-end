const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("api/Products", {
      target: "https://localhost:44342/",
      changeOrigin: true,
      ws: true,
    })
  );
};
