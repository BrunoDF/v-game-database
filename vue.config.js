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
      },
      '^/image': {
        target: 'https://images.igdb.com',
        pathRewrite: {'^/image/': '/igdb/image/upload/'},
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