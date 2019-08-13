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
