module.exports = {
  devServer: {
    port: 9000,
  },
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .options({
        fix: true,
      })
  },
}
