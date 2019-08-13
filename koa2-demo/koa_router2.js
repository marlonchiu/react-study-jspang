// Koa-router 层级

// ./koa-router2.js

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
// const router = new Router({
//   // prefix: '/jspang'  // 设置前缀
// })

// 设置路由层级
let home = new Router()
home
  .get('/jspang', async (ctx, next) => {
    ctx.body = 'Home jspang'
  })
  .get('/todo', async (ctx, next) => {   // 路由多页面配置
    ctx.body = 'Home Todo'
  })

let page = new Router()
page
  .get('/jspang',(ctx, next) => {
    ctx.body = 'Page jspang'
  })
  .get('/todo',(ctx, next) => {   // 路由多页面配置
    ctx.body = 'Page Todo'
  })

// 装载所有子路由  router.use(‘/page’, page.routes(), page.allowedMethods())
// 设置父路由
let router = new Router()
router.use('/home', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

// 挂载路由中间件
app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('[demo] server is starting at port 3000')
})