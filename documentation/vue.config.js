// vue.config.js
module.exports = {
    productionSourceMap: false,
    //assetsDir: 'documention/static/vuejx-client/',
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/': {
              target: 'http://localhost:8801',
              secure: false,
              changeOrigin: true
            }
        }
    }
  }