// Koa2中使用cookie
/*
ctx.cookies.get(name,[optins]):读取上下文请求中的cookie。
ctx.cookies.set(name,value,[options])：在上下文中写入cookie。

*/


const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  if (ctx.url === '/index') {
    ctx.cookies.set('myName', 'jspang', {
      domain: '127.0.0.1', // 写cookie所在的域名
      path: '/index', // 写cookie所在的路径
      maxAge: 1000 * 60 * 60 * 24, // cookie有效时长
      expires: new Date('2019-12-31'), // cookie失效时间
      httpOnly: false, // 是否只用于http请求中获取
      overwrite: false // 是否允许重写
    })
    ctx.body = 'cookies is ok'
  } else {
    if (ctx.cookies.get('myName')) { // 读取cookies
      ctx.body = ctx.cookies.get('myName')
    } else {
      ctx.body = 'cookies is none'
    }
    // ctx.body = 'Hello World'
  }
})

// 写好后预览，打开F12可以在Application中找到Cookies选项。就可以找到我们写入的name和value了


app.listen(3000, () => {
  console.log('[demo] server is starting at port 3000')
})