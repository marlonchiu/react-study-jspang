# webpack3.x知识点学习

## 学习参考

* [Webpack3.X版 成神之路 (共24集)](https://jspang.com/posts/2017/09/16/webpack3.html)
* [入门 Webpack，看这篇就够了](https://segmentfault.com/a/1190000006178770)
* [官方文档](https://www.webpackjs.com/concepts/)

## 其他知识

* `live-server`

  ```bash
  npm install -g live-server  #全局安装

  #直接项目根目录运行 live-server  就可以浏览器自动打开
  ```

* 获取文件绝对路径 `path`

  ```javascript
  const path = require('path')
  console.log(path.resolve(__dirname, 'dist'))

  // 得到绝对路径
  // H:\Project\react-study-jspang\webpack3-demo\dist
  ```

## 第05节：模块：CSS文件打包

* Loaders的配置型简单梳理一下。
  * test：用于匹配处理文件的扩展名的表达式，这个选项是必须进行配置的；
  * use/loader：loader名称，就是你要使用模块的名称，这个选项也必须进行配置，否则报错；
  * include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
  * query：为loaders提供额外的设置选项（可选）

* 依赖包

  ```bash
  style-loader  #用来处理css文件中的url()等
  css-loader # 用来将css插入到页面的style标签
  ```

* 增加配置

  ```javascript
    // 模块：例如解读CSS,图片如何转换，压缩
  
    // 配置一共有如下三种写法
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
  ```

## 第07节：插件配置：HTML文件的发布

* 下载依赖

  ```bash
  npm install --save-dev html-webpack-plugin
  ```

* 配置

  ```javascript
  const htmlPlugin = require('html-webpack-plugin')  
  
  // 插件，用于生产模版和各项功能
    plugins: [
      // 配置js压缩（webpack 4.x 默认启用js压缩）
      // new Uglify(),
      new htmlPlugin({
        minify: {
          removeAttributeQuotes: true
        },
        hash: true,
        template: './src/index.html'
      })
    ],
  ```

* 配置说明
  * minify：是对html文件进行压缩，removeAttrubuteQuotes是却掉属性的双引号。
  * hash：为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
  * template：是要打包的html模版路径和文件名称。

## 第08节：图片迈坑：CSS中的图片处理

* 下载依赖

  ```bash
  npm install --save-dev file-loader url-loader
  ```

* loader 说明
  * **`file-loader`**：解决引用路径的问题
  * **`url-loade`**：将引入的图片编码，生成dataURl

* url-loader和file-loader是什么关系呢？

  简答地说，url-loader封装了file-loader。url-loader不依赖于file-loader，即使用url-loader时，只需要安装url-loader即可，不需要安装file-loader，因为url-loader内置了file-loader。通过上面的介绍，我们可以看到，url-loader工作分两种情况：
  1.文件大小小于limit参数，url-loader将会把文件转为DataURL（Base64格式）；
  2.文件大小大于limit，url-loader会调用file-loader进行处理，参数也会直接传给file-loader。

## 第09节：图片迈坑：CSS分离与图片路径处理

* 本节目标
  * 第一个是把CSS从JavasScript代码中分离出来，
  * 第二个是如何处理分离出来后CSS中的图片路径不对问题

* 下载依赖

  ```bash
  npm install --save-dev extract-text-webpack-plugin
  
  # 这个插件就可以完美的解决我们提取CSS的需求，但是webpack官方其实并不建议这样作，他们认为CSS就应该打包到JavasScript当中以减少http的请求数。但现实中的需求往往不是我们前端能控制的，有些需求是我们不能控制的，分离CSS就是这样一个既合理由不合理的需求
  ```

* **注意**Since webpack v4 the `extract-text-webpack-plugin` should not be used for css. Use [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) instead.

* 下载依赖： `npm install --save-dev mini-css-extract-plugin`

* 配置操作

  ```javascript
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');
  
  module.exports = {
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: '[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                publicPath: '../',
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
          ],
        },
      ],
    },
  };
  ```
