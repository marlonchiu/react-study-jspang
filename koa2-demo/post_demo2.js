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
    // ctx.body = '接收到POST请求'
    // console.log(ctx)
    let postdata = await parsePostData(ctx)  // userName=jspang&age=123&webSite=www.douban.com
    ctx.body = postdata
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

// 解析Node原生POST参数
// 声明一个方法，然后用Promise对象进行解析。这里我们使用了ctx.req.on来接收事件
function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = ''
      ctx.req.on('data', (data) => {
        postdata += data
      })
      ctx.req.addListener('end', function () {
        // resolve(postdata)
        let parseData = parseQueryStr(postdata)
        resolve(parseData)
      })
    } catch{
      reject(error)
    }
  })
}

// POST字符串解析JSON对象
// 字符串封装JSON兑现对象的方法
// userName=jspang&age=123&webSite=www.douban.com
function parseQueryStr(queryStr) {
  let queryData = {}
  // split() 方法使用指定的分隔符字符串将一个String对象分割成字符串数组，
  // 以将字符串分隔为子字符串，以确定每个拆分的位置。 
  let queryStrList = queryStr.split('&')
  // console.log(queryStrList)
  // entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对
  for (let [index, queryStrItem] of queryStrList.entries()) {
    let itemList = queryStrItem.split('=')
    // console.log(itemList)
    queryData[itemList[0]] = decodeURIComponent(itemList[1])
  }
  return queryData
}


/** 
 
 使用for…of 循环
 var arr = ["a", "b", "c"];
var iterator = arr.entries();

for (let e of iterator) {
  console.log(e);
}

// [0, "a"] 
// [1, "b"] 
// [2, "c"]

*/