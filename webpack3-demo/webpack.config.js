const path = require('path')
// const Uglify = require('uglifyjs-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const glob = require('glob')
const PurifyCSSPlugin = require('purifycss-webpack')
const webpack = require('webpack')
const copyPlugin= require('copy-webpack-plugin')

// 引入模块
// const entry = require('./webpack_config/entry_webpack')

// console.log(encodeURIComponent(process.env.type))
var website
if (process.env.type === 'dev') {
  website = {
    publicPath: "http://10.0.192.93:1717/"
  }
} else {
  website = {
    publicPath: "http://cdn.jspang.com/"
  }
}
// console.log(website)



module.exports = {
  devtool: 'eval-source-map',
  // 入口文件的配置项
  entry: {
    entry: './src/entry.js',
    jquery: 'jquery',
    vue: 'vue'
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
      // babel
      {
        test: /\.(jsx|js)$/,
        use: [
          {
            loader: 'babel-loader',
            // options: {
            //   presets: ["es2015", "react"]
            // }
          }
        ],
        exclude: /node_modules/
      },
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
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
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
      { // 打包scss
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'  // creates style nodes from JS strings
          },
          {
            loader: 'css-loader'  // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader'  // compiles Sass to CSS
          }
        ]
      },
      // 分离less
      // {
      //   test: /\.less$/,
      //   use: ExtractTextPlugin.extract({
      //       use: [{
      //           loader: "css-loader"
      //       }, {
      //           loader: "less-loader"
      //       }],
      //       // use style-loader in development
      //       fallback: "style-loader"
      //   })
      // },
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
      ignoreOrder: false, // Enable to remove warnings about conflicting order
      use: [
        {
          loader: 'css-loader'
        },
        'postcss-loader'
      ]
    }),
    // 抽取 less /css/index.css是分离后的路径位置
    new MiniCssExtractPlugin({
      filename: 'css/black.less',
      chunkFilename: '[id].less',
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
    // 消除未使用的css
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname,'src/*.html'))
    }),
    // 引入第三方库
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    // 增加打包注释
    new webpack.BannerPlugin('JSPang版权所有，看官方免费视频到jspang.com收看'),
    // webpack.optimize.CommonsChunkPlugin已经移除
    // new webpack.optimize.CommonsChunkPlugin({
    //   // name对应入口文件中的名字，我们起的是jQuery
    //   name: 'jQuery',
    //   // 把文件打包到哪里，是一个路径
    //   filename: "assets/js/jquery.min.js",
    //   // 最小打包的文件模块数，这里直接写2就好
    //   minChunks: 2
    // })
    new copyPlugin([
      {
        from: __dirname + '/docs',  // from:要打包的静态资源目录地址，这里的__dirname是指项目目录下
        to: './public'  // to:要打包到的文件夹路径，跟随output配置中的目录。所以不需要再自己加__dirname
      }
    ])
  ],
  // 打包拆分  https://webpack.js.org/plugins/split-chunks-plugin/
  optimization: {
    splitChunks: {
      minChunks: 2,
      cacheGroups: {
        jquery: {
          name: 'jquery'
        },
        vue: {
          name: 'vue',
        }
      }
    }
  },
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
  },
  // 监视的配置项
  watchOptions: {
    // 检测修改的时间，以毫秒为单位
    poll: 1000,
    // 防止重复保存而发生重复编译错误。这里设置的500是半秒内重复保存，不进行打包操作
    aggregateTimeout: 500,
    // 不监听的目录
    ignored: /node_modules/,
  }
}
