// Koa-router 参数

// ./koa-router3.js

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router
  .get('/', (ctx, next) => {
    // 获取 get 请求参数
    ctx.body = ctx.query
  })

// 挂载路由中间件
app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('[demo] server is starting at port 3000')
})

// 地址栏输出 http://127.0.0.1:3000/?user=jspang&age=18
/*
{
  "user": "jspang",
  "age": "18"
} 
*/