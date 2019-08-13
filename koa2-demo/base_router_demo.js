// Koa2原生路由实现

// ctx.request.url
// 地址栏输入的路径，然后根据路径的不同进行跳转

function render(page) {
  return new Promise((resolve, reject) => {
    let pageUrl = `./page/${page}`
    // 获取文件地址 读取文件
    fs.readFile(pageUrl, "binary", (error, data) => {
      console.log(123456)
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
}

async function route(url) {
  let page = '404.html'
  switch (url) {
    case '/':
      page = 'index.html'
      break
    case '/index':
      page = 'index.html'
      break
    case '/todo':
      page = 'todo.html'
      break
    case '/404':
      page = '404.html'
      break
    default:
      break
  }

  let html = await render(page)
  return html
}

const Koa = require('koa')
const app = new Koa()
const fs = require('fs')

app.use(async (ctx) => {
  let url = ctx.request.url
  let html = await route(url)
  ctx.body = html
})

app.listen(3000, () => {
  console.log('[demo] server is starting at port 3000')
})