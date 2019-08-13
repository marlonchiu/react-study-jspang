// ctx.method 得到请求类型

// Koa2中提供了ctx.method属性，可以轻松的得到请求的类型，
// 然后根据请求类型编写不同的相应方法

const Koa = require('koa')
const app = new Koa()
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
    ctx.body = '接收到请求'
  } else {    // 其他请求显示404报错
    ctx.body = '<h1>404 page!</h1>'
  }
})

app.listen(3000, () => {
    console.log('[demo] server is starting at port 3000')
})

/**
浏览器中输入http://127.0.0.1:3000进行查看，
  第一次进入时给我们展现的是一个表单页面，
  我们点击提交后可以看到服务器接收到了我们的信息，但我们并没有做出任何处理。
  当我们下输入一个地址时，它会提示404错误。
* */