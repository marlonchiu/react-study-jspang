# webpack3.x知识点学习

## 学习参考

* [Webpack3.X版 成神之路 (共24集)](https://jspang.com/posts/2017/09/16/webpack3.html)
* [入门 Webpack，看这篇就够了](https://segmentfault.com/a/1190000006178770)
* [官方文档](https://www.webpackjs.com/concepts/)
* [webpack4系列教程](https://www.jianshu.com/p/46d09ac4c8f2)

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

## 第10节：图片迈坑：处理HTML中的图片

* 解决的问题就是在hmtl文件中引入`img`标签的问题

* 下载依赖

  ```bash
  npm install html-withimg-loader --save
  ```

* 配置

  ```javascript
  // webpack.config.js(注意一下图片大小，压缩限制)
  
  module.exports = {
  
    // 模块：例如解读CSS,图片如何转换，压缩
    module: {
      rules: [
        {
          test: /\.(htm|html)$/i,
          use: ['html-withing-loader']
        }
      ]
    },
  }
  ```

## 第11节：CSS进阶：Less文件的打包和分离

* 下载依赖：

  ```bash
  npm install --save-dev less less-loader
  ```

* 配置：

  ```javascript
  
    // 模块：例如解读CSS,图片如何转换，压缩
    module: {
      rules: [
        {
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
        }
      ]
    },
    // 插件，用于生产模版和各项功能
    plugins: [
      // 抽取 less /css/index.css是分离后的路径位置
      new MiniCssExtractPlugin({
        filename: 'css/[name].less',
        chunkFilename: '[id].less',
        ignoreOrder: false // Enable to remove warnings about conflicting order
      })
    ],
  ```

## 第13节：CSS进阶：自动处理CSS3属性前缀

* 依赖

  ```bash
  npm install --save-dev postcss-loader autoprefixer
  ```
  
* `postcss.config.js`

  ```javascript
  // https://www.cnblogs.com/hellowoeld/p/10571792.html
  
  module.exports = {
    plugins: [
      require('autoprefixer')({
        "browsers": [
          "defaults",
          "not ie < 11",
          "last 2 versions",
          "> 1%",
          "iOS 7",
          "last 3 iOS versions"
        ]
      })
    ]
  }
  ```

* 配置

  ```javascript
  {
    test: /\.css$/,
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
  ```

## 第14节：CSS进阶：消除未使用的CSS

* 依赖

  ```bash
   npm install --save-dev purifycss-webpack purify-css
  ```

* 配置

  ```javascript
  const glob = require('glob')
  const PurifyCSSPlugin = require('purifycss-webpack')
  
  // 插件，用于生产模版和各项功能
  plugins: [
      // 消除未使用的css
      new PurifyCSSPlugin({
          paths: glob.sync(path.join(__dirname,'src/*.html'))
      })
  ],
  ```

## 第15节：给webpack增加babel支持

* 依赖

  ```bash
  npm install --save-dev babel-core babel-loader@7 babel-preset-es2015 babel-preset-react
  
  # 学习是使用的是webpack4.x版本，按照教程操作报错，查找问题提示在 babel-loader@7
  ```
  
* 配置

  ```javascript
  {
      test: /\.(jsx|js)$/,
      use: [
         {
            loader: 'babel-loader',
            options: {
               presets: ["es2015", "react"]
            }
          }
       ],
       exclude: /node_modules/
  },
  ```

* babel 独立出来

## 第16节：打包后如何调试

* 在配置`devtool`时，webpack给我们提供了四种选项。
  * `source-map`:在一个单独文件中产生一个完整且功能完全的文件。这个文件具有最好的source map,但是它会减慢打包速度；
  * `cheap-module-source-map`:在一个单独的文件中产生一个不带列映射的map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号）,会对调试造成不便。
  * `eval-source-map`:使用eval打包源文件模块，在同一个文件中生产干净的完整版的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。在**开发阶段**这是一个非常好的选项，在生产阶段则一定要不开启这个选项。
  * `cheap-module-eval-source-map`:这是在打包文件时最快的生产source map的方法，生产的 Source map 会和打包后的JavaScript文件同行显示，没有影射列，和eval-source-map选项具有相似的缺点。
  
* 如果大型项目可以使用source-map，如果是中小型项目使用eval-source-map就完全可以应对，需要强调说明的是，source map只适用于开发阶段，上线前记得修改这些调试设置。

## 第17节：实战技巧：开发和生产并行设置

* **依赖不同**：一个项目中是有开发环境和生产环境的，这两个环境的依赖也是不同的。
  * 开发依赖：只在开发中用来帮助你进行开发，简化代码或者生成兼容设置的以来包。你可以打开package.json来查看，devDependencies的下面的这些包为开发使用的包。这些包在生产环境中并没有用处。
  * 生产依赖：就是比如我们的js使用了jquery，jquery的程序要在浏览器端起作用，也就是说我们最终的程序也需要这个包，这就是生产依赖。这些包在dependencies中

* 安装依赖包

  ```bash
  # 安装全部项目依赖包：
  npm install
   
  # 安装生产环境依赖包：
  npm install --production
  ```

* **配置生产和开发并行**

  * **修改package.json命令**

    ```json
    "scripts": {
        "server": "webpack-dev-server --open",
        "dev": "set type=dev&webpack",
        "build": "set type=build&webpack"
      },

    //  可以传递指令
    ```

  * **修改webpack.config.js文件**

    ```javascript
    // 可以利用node的语法来读取type的值，然后根据type的值用if–else判断
    // 查看传值(node语法)

    console.log(encodeURIComponent(process.env.type))

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
    console.log(website)
    ```

  * **Mac下的package.json设置**

    ```json
    // MAC电脑下需要把set换成export，并且要多加一个&符

    "scripts": {
        "server": "webpack-dev-server --open",
        "dev": "export type=dev&&webpack",
        "build": "export type=build&&webpack"
    },
    ```

## 第18节：实战技巧：webpack模块化配置

## 第19节：实战技巧：优雅打包第三方类库

* 直接在入口处使用

  ```javascript
  // entry.js
  
  // 引入
  import $ from 'jquery';
  
  // 使用
  $('#webpack').html('hello Webpack')
  ```

* 配置webpack

  ProvidePlugin是一个webpack自带的插件，Provide的意思就是装备、提供。因为ProvidePlugin是webpack自带的插件，所以要先再webpack.config.js中引入webpack.

  ```javascript
  const webpack = require('webpack')
  
  plugins: [
      // 引入第三方库
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    ],
  ```

## 第20节：实战技巧：watch的正确使用方法

* 直接使用`webpack-dev-server`

* 项目命令行`webpack --watch`

* 监视的配置项

  ```javascript
  // 监视的配置项
    watchOptions: {
      // 检测修改的时间，以毫秒为单位
      poll: 1000,
      // 防止重复保存而发生重复编译错误。这里设置的500是半秒内重复保存，不进行打包操作
      aggregateTimeout: 500,
      // 不监听的目录
      ignored: /node_modules/,
    }
  ```

* 增加打包时的注释

  ```javascript
  const webpack = require('webpack')
  
  plugins: [
      // 增加打包注释
      new webpack.BannerPlugin('JSPang版权所有，看官方免费视频到jspang.com收看')
    ],

  // webpack --watch 查看 dist/entry.js
  ```

## 第21节：实战技巧：webpack优化黑技能

* **ProvidePlugin和import**
  * 在第19节中如何引入第三方类库，并引入了jquery，在引用JQuery时我们用了两种方法，第一种时import，第二种时使用ProvidePlugin插件。那两种引入方法有什么区别那?
  * `import`引入方法：引用后不管你在代码中使用不使用该类库，都会把该类库打包起来，这样有时就会让代码产生冗余。
  * `ProvidePlugin`引入方法：引用后只有在类库使用时，才按需进行打包，所以建议在工作使用插件的方式进行引入。 具体的对比操作，你会看出两种引入方法的对比打包结果。差距还是蛮大

* **抽离JQuery**

  ```javascript
  entry: {
      entry: './src/entry.js',
      jquery: 'jquery',
      vue: 'vue'
    },

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

  // webpack.optimize.CommonsChunkPlugin已经移除
  ```
