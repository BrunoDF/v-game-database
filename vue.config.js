module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },

  devServer: {
    proxy: {
      '^/api': {
        target: 'https://api-v3.igdb.com',
        pathRewrite: {'^/api/': '/'},
        changeOrigin: true
      }
    }
  },

  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/_variables.scss";
        `
      }
    }
  }

}