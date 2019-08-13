// Koa-router

// ./koa-router1.js

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello Koa-router'
  })
  .get('/todo', (ctx, next) => {   // 路由多页面配置
    ctx.body = 'Todo page!'
  })

// 挂载路由
app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('[demo] server is starting at port 3000')
})