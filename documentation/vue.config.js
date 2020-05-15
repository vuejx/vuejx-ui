// vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '/': {
              target: 'http://localhost:8801',
              secure: false,
              changeOrigin: true
            }
        }
    }
  }