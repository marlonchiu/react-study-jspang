---
title: React Router基础
date: '2019-08-14'
type: 技术
tags: React
sidebarDepth: 3
sidebar: auto
note: React Router 是一个基于React之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与URL间的同步。
---

# React Router基础

学习指导：[React Router 免费文字视频教程（共9集）](https://jspang.com/posts/2019/07/31/react-router.html)

**React Router 是一个基于React之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与URL间的同步。**

这是官方的解释，虽然足以解释`React Router`，工作中凡是React技术栈的项目（WEB和Native），都需要用到React Router。有了它你才可以构建复杂的应用程序，有了它才能使应用有层次感。如果没有React Router，我们智能用`switch...case`这样的语句，进行判断渲染，这非常的麻烦，而且不可用；但是有了React Router一切就变的简单了。

## P01: React Router 安装和基础环境搭建

* 初始化一个react项目
* 安装 `react-router-dom`

```bash
# 安装 react-router-dom
npm install --save react-router-dom
```

## P02: 像制作普通网页一样使用ReactRouter

`exact`精准匹配的意思

就是你的路径信息要完全匹配成功，才可以实现跳转，匹配一部分是不行的。

比如我们把`Index`的精准匹配去掉，你会发现，无论你的地址栏输入什么都可以匹配到`Index`组件，这并不是我们想要的结果。

```javascript
<Route path="/" component={Index} />
```

所以我们加上了精准匹配`exact`



* 简单页面代码

  ```javascript
  // ./src/AppRouter.js
  
  import React from 'react'
  import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
  
  // 引入响应的页面组件
  import Index from './pages/Index'
  import List from './pages/List'
  
  function AppRouter() {
      return (
          <Router>
              <ul>
                  <li> <Link to="/">首页</Link> </li>
                  <li><Link to="/list/">列表</Link> </li>
              </ul>
              <Route path='/' exact component={Index} />
              <Route path='/list/' component={List} />
          </Router>
      )
  }
  
  export default AppRouter
  
  // 如果把Index的精准匹配去掉，你会发现，无论你的地址栏输入什么都可以匹配到Index组件
  ```
  
## P03: ReactRouter动态传值-1

### 在Route上设置允许动态传值

这个设置是以`:`开始的，然后紧跟着你传递的key（键名称）名称。

```js
<Route path="/list/:id" component={List} />
```

### Link上传递值

设置好规则后，就可以在`Link`上设置值了，现在设置传递的ID值了，这时候不用再添加id了，直接写值就可以了。

```js
 <li><Link to="/list/123">列表</Link> </li>
```

### 在List组件上接收并显示传递值

在List组件的`componentDidMount`生命周期下，打印输出`this.props.match`，可以看出得到三个对象

```javascript
// {path: "/list/:id", url: "/list/123", isExact: true, params: {…}}
{
  isExact: true
  params:{
    id: "123"
  }
  path: "/list/:id"
  url: "/list/123"
}
```

* `this.props.match` 对象包括三个部分:
  * `patch`: 自己定义的路由规则，可以清楚的看到是可以产地id参数的。
  * `url`:  真实的访问路径，这上面可以清楚的看到传递过来的参数是什么。
  * `params`： 传递过来的参数，key和value值。

* List组件展示页面的Id

  ```javascript
  // ./src/pages/List.js
  
  import React, { Component } from 'react'
  class List extends Component {
      constructor(props) {
          super(props)
          this.state = {
              id: ''
          }
      }
      componentDidMount() {
          console.log(this.props.match)
          let tempId = this.props.match.params.id
          this.setState({
              id: tempId
          })
      }
      render() { 
          const {id} = this.state
          return (
              <div>
                  <h2>List Page Id--> {id}</h2>
              </div>
          )
      }
  }

  export default List;
  ```

## P04: ReactRouter动态传值-2

详见代码 `./src/pages/Index.js`

## P05: ReactRouter重定向-Redirect使用

* `Redirect`(重定向)
  - 标签式重定向: 就是利用`<Redirect>`标签来进行重定向，业务逻辑不复杂时建议使用这种。
  - 编程式重定向: 这种是利用编程的方式，一般用于业务逻辑当中，比如登录成功挑战到会员中心页面。

* 重定向和跳转有一个重要的区别，就是跳转是可以用浏览器的回退按钮返回上一级的，而重定向是不可以的。

* **标签式重定向**

  ```javascript
  // ./src/AppRouter.js
  import Home from './Pages/Home'
  <Route path="/home/" component={Home} />

  // ./src/pages/Index.js
  
  // 从Index组件重新定向到Home组件，需要先引入Redirect。
  import { Link , Redirect } from "react-router-dom";
  
  // 引入Redirect后，直接在render函数里使用
  <Redirect to="/home/" />
  ```

* **编程式重定向**

  ```javascript
  // 直接在构造函数constructor中加入下面的重定向代码。
  
  this.props.history.push("/home/")
  ```
