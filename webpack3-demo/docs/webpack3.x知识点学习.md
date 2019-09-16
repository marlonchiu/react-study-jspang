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
  npm
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