const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://pitang-api.onrender.com/',
    //target: 'http://localhost:8080/',
    secure: false,
    // logLevel: 'debug'
    changeOrigin: true,
    pathRewrite: {
      "^/": ""
    }
  }
];

module.exports = PROXY_CONFIG;

  