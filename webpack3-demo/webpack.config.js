const path = require('path')
// const Uglify = require('uglifyjs-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

var website = {
  publicPath:"http://10.0.192.93:1717/"
}

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
    filename: '[name].js',
    // 可以解决图片路径异常的问题
    // publicPath: website.publicPath
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
        // use: [
        //   {
        //     loader: 'style-loader'
        //   },
        //   {
        //     loader: 'css-loader'
        //   }
        // ]
        // or 抽取css (4.x不适用了)
        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: 'css-loader'
        // })
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              // hmr: process.env.NODE_ENV === 'development',
            }
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5 * 1024,  // 100kb以下的会被base64
              // 图片输出路径到image文件夹
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(htm|html)$/i,
        use: ['html-withimg-loader']
      },
      { // 打包less
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'  // creates style nodes from JS strings
          },
          {
            loader: 'css-loader'  // translates CSS into CommonJS
          },
          {
            loader: 'less-loader'  // compiles Less to CSS
          }
        ]
      },
      // 分离less
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
}
    ]
  },
  // 插件，用于生产模版和各项功能
  plugins: [
    // 配置js压缩（webpack 4.x 默认启用js压缩）
    // new Uglify(),
    new HtmlPlugin({
      minify: {
        removeAttributeQuotes: true
      },
      hash: true,
      template: './src/index.html'
    }),
    // 抽取 css /css/index.css是分离后的路径位置
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
    // 抽取 less /css/index.css是分离后的路径位置
    new MiniCssExtractPlugin({
      filename: 'css/[name].less',
      chunkFilename: '[id].less',
      ignoreOrder: false // Enable to remove warnings about conflicting order
    })
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

