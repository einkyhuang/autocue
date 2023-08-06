const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'AI标签提词器'
      return args
    })
  },
})
