module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'https://storage.googleapis.com/hakathon',
          changeOrigin: true
        },
      }
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/hackathon/dist/' : '/'
  }