const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/api', 
  { 
    target: 'http://koa2.901web.com',
    pathRewrite: {
      '^/api': '',
    },
    changeOrigin: true,
    // secure: false
  }));
  app.use(createProxyMiddleware('/client', {
      target: 'http://demo.901web.com',
      pathRewrite: {
        '^/client': '',
      },
      changeOrigin: true,
      // secure: false
  }));
};
