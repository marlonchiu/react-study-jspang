const path = require('path')
const Uglify = require('uglifyjs-webpack-plugin')

module.exports = {
  // 入口文件的配置项
  entry: {
    entry: './src/entry.js',
    // entry2: './src/entry2.js',
  },
  // 出口文件的配置项
  output: {
    // 输出打包的路径
    path: path.resolve(__dirname, 'dist'),
    // 打包的文件名称
    // filename:'bundle.js'
    filename:'[name].js'
  },
  // 模块：例如解读CSS,图片如何转换，压缩
  module: {
    rules: [
      // 处理 css(test use/loader include exclude query)
      {
        test: /\.css$/,
        // or
        // use: ['style-loader', 'css-loader']
        // or
        // loader: ['style-loader', 'css-loader']
        // or
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  // 插件，用于生产模版和各项功能
  plugins: [
    // 配置js压缩（webpack 4.x 默认启用js压缩）
    new Uglify()
  ],
  // 配置webpack开发服务功能
  devServer: {
    // 配置服务器基本运行路径，用于找到程序打包地址
    contentBase: path.resolve(__dirname, 'dist'),
    // 服务器的IP地址，可以使用IP也可以使用localhost
    host: 'localhost',
    // 配置服务端口
    port: 1717,
    // 服务端是否开启压缩
    compress: true
  }
}

