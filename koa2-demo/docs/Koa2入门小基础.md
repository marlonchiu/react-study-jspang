---
title: Koa2入门小基础
date: '2019-08-13'
type: 技术
tags: Koa2
sidebarDepth: 3
sidebar: auto
note: Koa2是现在最流行的基于Node.js平台的web开发框架，它很小，但扩展性很强。Koa给人一种干净利落的感觉，体积小、编程方式干净。
---

# Koa2入门小基础

学习指导：[挑战全栈 Koa2免费视频教程 (共13集)](http://www.jspang.com/posts/2017/11/13/koa2.html)

Koa2是现在最流行的基于Node.js平台的web开发框架，它很小，但扩展性很强。Koa给人一种干净利落的感觉，体积小、编程方式干净。

> 使用 koa 编写 web 应用，通过组合不同的 generator，可以免除重复繁琐的回调函数嵌套，并极大地提升错误处理的效率。一个Koa应用就是一个对象，包含了一个middleware数组，这个数组由一组Generator函数组成。这些函数负责对HTTP请求进行各种加工，比如生成缓存、指定代理、请求重定向等等。这些中间件函数基于 request 请求以一个类似于栈的结构组成并依次执行。

## 第01节：Koa开发环境搭建

作Koa2的开发，它要求Node.js版本高于V7.6。

> ::: warning 注意事项
> 请确保你的 Node.js 版本 >= 7.6。
> :::

### 搭建环境

```bash
cd code  //进入code文件夹
mkdir koa2-demo //创建koa2-demo文件夹
cd koa2-demo  //进入koa2-demo文件夹

npm init -y // 初始化生产package.json 文件
npm install --save koa // 安装koa
```

### 与君初相识

```javascript
// 根目录下创建 index.js

const Koa = require('koa')

const app = new Koa()
app.use(async (ctx) => {
    ctx.body = 'Hello Koa2'
})

app.listen(3000)

console.log('[demo] start-quick is starting at port 3000')

// 运行 node index.js
// 浏览器中输入：http://127.0.0.1:3000 就可以看到结果了
```

## 第02节：async/await的使用方法

### 什么是async和await

async是异步的简写，而await可以堪称async wait的简写。

明白了两个单词，就很好理解了async是声明一个方法是异步的，await是等待异步方法完成。

注意的是await必须在async方法中才可以使用因为await访问本身就会造成程序停止堵塞，所以必须在异步方法中才可以使用。

* **async到底起什么作用**

  ```javascript
  // async是让方法变成异步，这个很好理解，关键是他的返回值是什么？我们得到后如何处理？
  
  // ./demo01.js
  async function testAsync() {
      return 'Hello Async'
  }
  const result = testAsync()
  console.log(result)  // Promise { 'Hello Async' }
  
  // 输出了Promise { ‘Hello Async’ }，这时候会发现它返回的是Promise
  ```

* **await在等什么？**

  await一般在等待async方法执行完毕，但是其实await等待的只是一个表达式，这个表达式在官方文档里说的是Promise对象，可是它也可以接受普通值。
  
  **await必须在async方法中才可以使用**
  
  **await接收Promise对象，也可以接收普通值**
  
  ```javascript
  // ./demo02.js
  
  function getSomething(){
      return 'something'
  }
  
  async function testAsync() {
      return 'Hello Async'
  }
  
  async function test() {
      const res1 = await getSomething()
      const res2 = await testAsync()
      console.log(res1, res2)
  }
  
  // 执行
  test()  // something Hello Async
  ```

### async/await同时使用

```javascript
// ./demo03.js

function takeLongTime(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('long_time_value')
        }, 2000);
    })
}

async function test() {
    const res = await takeLongTime()
    console.log(res)
}

test()

// 等待2秒钟， 输出 long_time_value
```

## 第03节：Get请求的接收

* 在koa2中GET请求通过request接收，但是接受的方法有两种：query和querystring。
  * query：返回的是格式化好的参数对象。
  * querystring：返回的是请求字符串。
  
* 从 `ctx.request` 中获取Get请求

    ```javascript
    /**
     *  在koa2中GET请求通过request接收，但是接受的方法有两种：query和querystring。
     *  query：返回的是格式化好的参数对象。
     *  querystring：返回的是请求字符串。
     */

    // ./ get_demo.js

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
    ```

* 从`ctx`中得到GET请求。`ctx`中也分为query和querystring

  ```javascript
  // 从ctx中得到GET请求。ctx中也分为query和querystring
  
  const Koa = require('koa')
  const app = new Koa()
  app.use(async (ctx) => {
      //从request中获取GET请求
      // 上下文得到url对象
      let url = ctx.url
      let request = ctx.request
      let req_query = request.query
      let req_querystring = request.querystring
  
      //从上下文中直接获取
      let ctx_query = ctx.query
      let ctx_querystring = ctx.querystring

      ctx.body = {
          url,
          req_query,
          req_querystring,
          ctx_query,
          ctx_querystring
      }
  })
  
  app.listen(3000, () => {
      console.log('[demo] server is starting at port 3000')
  })
  
  /**
   // 20190813114559
  // http://127.0.0.1:3000/?user=jspang&age=18
  
  {
    "url": "/?user=jspang&age=18",
    "req_query": {
      "user": "jspang",
      "age": "18"
    },
    "req_querystring": "user=jspang&age=18",
    "ctx_query": {
      "user": "jspang",
      "age": "18"
    },
    "ctx_querystring": "user=jspang&age=18"
  }
  
  * */
  ```

* 总结：获得GET请求的方式有两种，一种是从request中获得，一种是一直从上下文中获得。

* 获得的格式也有两种：query和querystring。

## 第04节：POST请求如何接收（1）

* 对于POST请求的处理，Koa2没有封装方便的获取参数的方法，需要通过解析上下文context中的原生node.js请求对象req来获取。

* **获取Post请求的步骤：**

1. 解析上下文ctx中的原生nodex.js对象req。
2. 将POST表单数据解析成query string-字符串.(例如:user=jspang&age=18)
3. 将字符串转换成JSON格式。

* **ctx.request和ctx.req的区别**

1. ctx.request: 是Koa2中context经过封装的请求对象，它用起来更直观和简单。
2. ctx.req: 是context提供的node.js原生HTTP请求对象。这个虽然不那么直观，但是可以得到更多的内容，适合我们深度编程。

* **ctx.method 得到请求类型**

  ```javascript
  // ctx.method 得到请求类型
  
  // Koa2中提供了ctx.method属性，可以轻松的得到请求的类型，
  // 然后根据请求类型编写不同的相应方法
  
  // ./post_demo01.js
  
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
  
  // **总结：**从理论上讲解了如何获取POST请求参数
  ```



## 第05节：POST请求如何接收（2）

* **解析Node原生POST参数**

  ```javascript
  // ./post_demo2.js
  
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
          resolve(postdata)
        })
      } catch{
        reject(error)
      }
    })
  }
  ```

* 修改在上节课接收POST请求的处理方法里，修改代码如下

  ```javascript
  // ctx.body = '接收到POST请求'
  let postdata = await parsePostData(ctx)  // userName=jspang&age=123&webSite=www.douban.com
  ctx.body = postdata
  
  // 页面就输出刚才填的表单  userName=jspang&age=123&webSite=www.douban.com
  ```

* **POST字符串解析JSON对象**

  ```javascript
  // ./post_demo2.js
  
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
      queryData[itemList[0]] = itemList[1]
    }
    return queryData
  }
  
  
  // 在上述解析Node原生POST参数中修改
  ctx.req.addListener('end', function () {
      // resolve(postdata)
      let parseData = parseQueryStr(postdata)
      resolve(parseData)
  })
  
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
  
  // node运行，浏览器http://127.0.0.1:3000，先填写表单，然后页面就会返回
  /*
  {
    "userName": "jspang",
    "age": "123",
    "webSite": "www.douban.com"
  }
  */
  ```

* 完整代码见`post_demo2.js`

## [扩展]Array/entries方法精讲

* 参考：[Array/entries](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)

* `**entries()**` 方法返回一个新的**Array Iterator**对象，该对象包含数组中每个索引的键/值对。

* > arr.entries()

  返回值是 一个新的 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Array) 迭代器对象。[Array Iterator](http://www.ecma-international.org/ecma-262/6.0/#sec-createarrayiterator)是对象，它的原型（__proto__:Array Iterator）上有一个[next](http://www.ecma-international.org/ecma-262/6.0/#sec-%arrayiteratorprototype%.next)方法，可用用于遍历迭代器取得原数组的[key,value]。

* `Array Iterator`

  ```javascript
  var arr = ["a", "b", "c"];
  var iterator = arr.entries();
  console.log(iterator);
  
  /*Array Iterator {}
           __proto__:Array Iterator
           next:ƒ next()
           Symbol(Symbol.toStringTag):"Array Iterator"
           __proto__:Object
  */
  ```

* `iterator.next()`

  ```javascript
  var arr = ["a", "b", "c"]; 
  var iterator = arr.entries();
  console.log(iterator.next());
  
  /*{value: Array(2), done: false}
            done:false
            value:(2) [0, "a"]
             __proto__: Object
  */
  // iterator.next()返回一个对象，对于有元素的数组，
  // 是next{ value: Array(2), done: false }；
  // next.done 用于指示迭代器是否完成：在每次迭代时进行更新而且都是false，
  // 直到迭代器结束done才是true。
  // next.value是一个["key","value"]的数组，是返回的迭代器中的元素值。
  ```

* `iterator.next方法运行`

  ```javascript
  var arr = ["a", "b", "c"];
  var iter = arr.entries();
  var a = [];
  
  // for(var i=0; i< arr.length; i++){   // 实际使用的是这个 
  for(var i=0; i< arr.length+1; i++){    // 注意，是length+1，比数组的长度大
      var tem = iter.next();             // 每次迭代时更新next
      console.log(tem.done);             // 这里可以看到更新后的done都是false
      if(tem.done !== true){             // 遍历迭代器结束done才是true
          console.log(tem.value);
          a[i]=tem.value;
      }
  }

  console.log(a);                         // 遍历完毕，输出next.value的数组
  ```

* `二维数组按行排序`

  ```javascript
  function sortArr(arr) {
      var goNext = true;
      var entries = arr.entries();
      while (goNext) {
          var result = entries.next();
          if (result.done !== true) {
              result.value[1].sort((a, b) => a - b);
              goNext = true;
          } else {
              goNext = false;
          }
      }
      return arr;
  }
  
  var arr = [[1,34],[456,2,3,44,234],[4567,1,4,5,6],[34,78,23,1]];
  sortArr(arr);
  
  /*(4) [Array(2), Array(5), Array(5), Array(4)]
      0:(2) [1, 34]
      1:(5) [2, 3, 44, 234, 456]
      2:(5) [1, 4, 5, 6, 4567]
      3:(4) [1, 23, 34, 78]
      length:4
      __proto__:Array(0)
  */
  ```

* `使用for…of 循环`

  ```javascript
  var arr = ["a", "b", "c"];
  var iterator = arr.entries();
  // undefined
  
  for (let e of iterator) {
      console.log(e);
  }
  
  // [0, "a"]
  // [1, "b"]
  // [2, "c"]
  ```
