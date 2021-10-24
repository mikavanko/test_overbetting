module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/hackathon/dist/' : '/',
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/styles/global.scss";`
      },
    }
  }
}