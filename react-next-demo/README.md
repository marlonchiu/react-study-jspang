# 如何使用 Ant Design 打包环境

## 解决方案参考

* [with-ant-design 解决方案](https://github.com/zeit/next.js/tree/canary/examples/with-ant-design)
* 按照说明下载example，查看对应的配置文件，主要问题在
  * 下载`null-loader`;
  * 修改`next.config.js`配置;

## 修改操作代码

* 1）下载`null-loader`

  ```bash
  yarn add null-loader
  ```

* 2）修改`next.config.js`配置

  ```javascript
  const withCss = require('@zeit/next-css')
  
  // if (typeof require !== undefined) {
  //   require.extensions['.css'] = file => { }
  // }
  
  // module.exports = withCss({})
  
  module.exports = withCss({
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style\/css.*?/
        const origExternals = [...config.externals]
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback()
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback)
            } else {
              callback()
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ]
  
        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        })
      }
      return config
    },
  })
  ```

## 全局样式

当我们需要添加一些全局的样式，比如鼠标悬浮在a标签上时出现下划线，这时候我们只需要在`style-jsx`标签上增加`global`关键词就行了

```javascript
<style jsx global>
  {`
    a:hover{
      text-decoration: underline;
    }
  `}
</style>
```
