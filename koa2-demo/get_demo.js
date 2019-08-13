/** 
 *  在koa2中GET请求通过request接收，但是接受的方法有两种：query和querystring。
 *  query：返回的是格式化好的参数对象。
 *  querystring：返回的是请求字符串。
 */

// 从 ctx.request 中获取Get请求

const Koa = require('koa')
const app = new Koa()
app.use(async (ctx) => {
    // 上下文得到url对象
    let url = ctx.url
    let request = ctx.request
    let req_query = request.query
    let req_querystring = request.querystring
    ctx.body = {
        url,
        req_query,
        req_querystring
    }
})

app.listen(3000, () => {
    console.log('[demo] server is starting at port 3000')
})

// 启动一切正常可在浏览器中使用http://127.0.0.1:3000?user=jspang&age=18来进行访问
// {"url":"/?user=jspang&age=18","req_query":{"user":"jspang","age":"18"},"req_querystring":"user=jspang&age=18"}
// query是一个对象，而querystring就是一个普通的字符串。