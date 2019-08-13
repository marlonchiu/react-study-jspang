// Post请求解析中间件   koa-bodyparser



const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
app.use(bodyParser())

app.use(async (ctx) => {
  // 当请求是GET请求，显示表单让用户填写
  if (ctx.url === '/' && ctx.method === 'GET') {
    let html = `
      <h1>Koa2 request post demo</h1>
      <form method='POST' action='/'>
      <p>userName</p>
        <input name="userName"/> <br/>
        <p>age</p>
        <input name="age"/> <br/>
        <p>webSite</p>
        <input name='webSite'/><br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html
  } else if (ctx.url === '/' && ctx.method === 'POST') {  // 当请求时POST请求时
    // ctx.body = '接收到POST请求'
    let postData= ctx.request.body
    ctx.body = postData
  } else {    // 其他请求显示404报错
    ctx.body = '<h1>404 page!</h1>'
  }
})

app.listen(3000, () => {
    console.log('[demo] server is starting at port 3000')
})
