module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '脚递ashibro—寄国际快递，上脚递'
        return args
      })
  }
}