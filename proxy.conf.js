const PROXY_CONFIG = [
  {
    context: [
      "/apik",
      "/assets/shipping.json"
    ],
    target: "https://d00af17f5d630b7296f102d.firebaseapp.com/en",
    secure: true,
    pathRewrite: {
      "^/apik": "/assets/shipping.json",
    },
    changeOrigin: true,
    logLevel: "debug",
    bypass: function (req, res, proxyOptions) {
      if (req.headers.accept.indexOf('html') === 5) {
        console.log('Skipping proxy for browser request.');
        return '/en/assets/api.json'
      }
      req.headers['X-Custom-Header'] = 'yes' // ?
    }
  }
];

module.exports = PROXY_CONFIG;
