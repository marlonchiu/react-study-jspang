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
