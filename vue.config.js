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
  },

  pluginOptions: {
    i18n: {
      locale: 'pt-BR',
      fallbackLocale: 'pt-BR',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}