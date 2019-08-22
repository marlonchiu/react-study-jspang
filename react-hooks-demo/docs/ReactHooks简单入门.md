---
title: ReactHooks简单入门
date: '2019-08-22'
type: 技术
tags: Koa2
sidebarDepth: 3
sidebar: auto
note: React Hooks改变了原始的React类的开发方式，改用了函数形式;它改变了复杂的状态操作形式，让程序员用起来更轻松;它改变了一个状态组件的复用性，让组件的复用性大大增加。
---

# ReactHooks简单入门
学习指导：[React Hooks 免费视频教程 (共9集)](https://jspang.com/posts/2019/08/12/react-hooks.html)

## 简单上手
```javascript
// ./ExampleHooks.js

// React Hooks写法
import React, { useState } from 'react';
function ExampleHooks() {
    const [count, setCount] = useState(0) // 数组的解构
    return (
        <div>
            <p>you click {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
     );
}
export default ExampleHooks;
```

##  入门语法

### `useState`: 状态声明

### `useEffect`: 代替生命周期函数

* `useEffect`两个注意点
  * React首次渲染和之后的每次渲染都会调用一遍`useEffect`函数，而之前我们要用两个生命周期函数分别表示首次渲染(`componentDidMonut`)和更新导致的重新渲染(`componentDidUpdate`)。
  * `useEffect`中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时异步执行的，而`componentDidMonut`和`componentDidUpdate`中的代码都是同步执行的。个人认为这个有好处也有坏处吧，比如我们要根据页面的大小，然后绘制当前弹出窗口的大小，如果时异步的就不好操作了
  

* `useEffect`第二个参数：

  * `useEffect`的第二个参数，它是一个数组，数组中可以写入很多状态对应的变量，意思是当状态值发生变化时，我们才进行解绑。
  * 但是当传空数组`[]`时，就是当组件将被销毁时才进行解绑，这也就实现了`componentWillUnmount`的生命周期函数。

* 展示代码：

  ```javascript
  // React Hooks写法
  import React, { useState, useEffect } from 'react';
  import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
  
  function Index() {
      useEffect(() => {
          console.log(`useEffect=>欢迎来到Index页面`)
          // 解绑事件
          return  () => {
              console.log(`你离开Index页面了`)
          }
      }, [])
      return <h2>Index page!</h2>
  }
  
  function List() {
      useEffect(() => {
          console.log(`useEffect=>欢迎来到List页面`)
      }, [])
      return <h2>List page!</h2>
  }
  
  function ExampleHooks3() {
      const [count, setCount] = useState(0) // 数组的解构
      useEffect(() => {
          console.log(`useEffect=>You clicked ${count} times`)
          return ()=>{
              console.log('====================')
          }
      }, [count])
      
      return (
          <div>
              <p>you click {count} times</p>
              <button onClick={() => setCount(count + 1)}>Click Me</button>
              <Router>
                  <ul>
                      <li><Link to='/'>首页</Link></li>
                      <li><Link to='/list/'>列表</Link></li>
                  </ul>
                  <Route path='/' exact component={Index}/>
                  <Route path='/list/' component={List}/>
              </Router>
          </div>
       );
  }
  export default ExampleHooks3;
  ```
