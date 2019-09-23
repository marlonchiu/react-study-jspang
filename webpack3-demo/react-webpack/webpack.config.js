const path  = require('path')
module.exports = {
  entry: {
    entry: './app/entry.js',
  },
  output: {
    filename: 'index.js',
    // 输出打包的路径
    path: path.resolve(__dirname, 'dist'),
    // 配置实现内存更新
    publicPath: 'temp/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:[
              "es2015","react"
            ]
          }
        },
        exclude:/node_modules/
      }
    ]
  },
  // 配置webpack开发服务功能
  devServer: {
    // 配置服务器基本运行路径，用于找到程序打包地址
    // contentBase: path.resolve(__dirname, 'dist'),
    contentBase:'./',
    // 服务器的IP地址，可以使用IP也可以使用localhost
    host: 'localhost',
    port: 3456,
    compress: true
  }
}