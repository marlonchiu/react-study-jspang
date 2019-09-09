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

## 入门语法

### `useState`: 状态声明

* useState是react自带的一个hook函数，它的作用是用来声明状态变量。
* **React是根据useState出现的顺序来确定的**
* **React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序**。

### `useEffect`: 代替生命周期函数

* `useEffect`两个注意点
  * React首次渲染和之后的每次渲染都会调用一遍`useEffect`函数，而之前我们要用两个生命周期函数分别表示首次渲染(`componentDidMonut`)和更新导致的重新渲染(`componentDidUpdate`)。
  * `useEffect`中定义的函数的**执行不会阻碍浏览器更新视图**，也就是说这些函数时**异步执行**的，而`componentDidMonut`和`componentDidUpdate`中的代码都是同步执行的。个人认为这个有好处也有坏处吧，比如我们要根据页面的大小，然后绘制当前弹出窗口的大小，如果时异步的就不好操作了
  
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

### `useContext` 让父子组件传值更简单

* `useContext`，它可以帮助我们跨越组件层级直接传递变量，实现共享。

* 需要注意的是`useContext`和`redux`的作用是不同的，一个解决的是组件之间值传递的问题，一个是应用中统一管理状态的问题，但通过和`useReducer`的配合使用，可以实现类似`Redux`的作用

* 代码展示：

  ```javascript
  // useContext 让父子组件传值更简单
  import React, { useState, createContext, useContext } from 'react';
  function Child() {
    const count = useContext(CountContext)   // 得到count
    return <h2>子组件接收到的值：{count}</h2>
  }
  
  const CountContext = createContext()
  function Example() {
    const [count, setCount] = useState(0) // 数组的解构
    return (
      <div>
        <p>you click {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        {/*======关键代码 */}
        {/* 将要传递的值放入标签中 */}
        <CountContext.Provider value={count}>  
          <Child></Child>
        </CountContext.Provider>
      </div>
    );
  }
  export default Example;
  ```

### useReducer语法

* 简单的实现加减法

  ```javascript
  // useReducer 实现redux效果
  
  import React, { useReducer} from 'react';
  
  function Example() {
    // useReducer 接收两个值一个是状态函数  一个初始值
    const [count, dispatch] = useReducer((state, action) => {
      switch (action) {
        case 'increment':
          return state + 1
        case 'decrement':
          return state - 1
        default:
          return state
      }
    }, 60)
    return (
      <div>
        <p>现在的值是： {count}</p>
        <button onClick={() => dispatch('increment')}>加一</button>
        <button onClick={() => dispatch('decrement')}>减一</button>
      </div>
      );
  }
  export default Example;
  
  // 简易实现 reducer
  // function countReducer(state, action) {
  //   switch (action.type) {
  //     case 'increment':
  //       return state + 1
  //     case 'decrement':
  //       return state - 1
  //     default:
  //       return state
  //   }
  // }
  ```

### useReducer代替Redux小案例

* 使用 `useContext` 和 `useReducer`是可以实现类似`Redux`的效果

* 理论上的可行性
  * 我们先从理论层面看看替代Redux的可能性，其实如果你对两个函数有所了解，只要我们巧妙的结合，这种替代方案是完全可行的。
  * `useContext`：可访问全局状态，避免一层层的传递状态。这符合Redux其中的一项规则，就是状态全局化，并能统一管理。
  * `useReducer`：通过action的传递，更新复杂逻辑的状态，主要是可以实现类似Redux中的Reducer部分，实现业务逻辑的可行性。

* 代码第一节

  ```javascript
  
  
  // ShowArea.js
  import React, { useContext } from 'react'
  import { ColorContext } from './Color'
  
  function ShowArea() {
    const { color } = useContext(ColorContext)
    return (
      <div style={{color: color}}>
        字体的颜色是{color}
      </div>
    )
  }
  
  export default ShowArea
  
  
  
  // Color.js
  import React, { createContext } from 'react';
  
  export const ColorContext = createContext({})
  
  export const Color = props => {
    return (
      <ColorContext.Provider value={{ color: 'pink' }}>
        {props.children}
      </ColorContext.Provider>
    )
  }
  ```

* 核心代码第二节

  ```javascript
  // Color.js
  
  import React, { createContext, useReducer} from 'react';
  
  export const ColorContext = createContext({})
  
  // 核心代码 --start
  export const UPDATE_COLOR = "UPDATE_COLOR"
  const reducer = (state, action) => {
    switch (action.type) {
      case UPDATE_COLOR:
        return action.color
      default:
        return state
    }
  }
  // 核心代码 --end
  
  export const Color = props => {
    // 解构赋值
    // 核心代码 --start
    const [color, dispatch] = useReducer(reducer, 'blue')
    // 核心代码 --end
    return (
      <ColorContext.Provider value={{ color, dispatch }}>
        {props.children}
      </ColorContext.Provider>
    )
  }

  
  // Buttons.js
  
  import React, {useContext} from 'react'
  import { ColorContext, UPDATE_COLOR } from './Color'
  
  function Buttons() {
    // 核心代码 --start
    const { dispatch } = useContext(ColorContext)
    // 核心代码 --end
    return (
      <div>
        <button onClick={() =>{dispatch({type:UPDATE_COLOR, color: 'red'})}}>红色</button>
        <button onClick={() =>{dispatch({type:UPDATE_COLOR, color: 'purple'})}}>紫色</button>
      </div>
    )
  }
  
  export default Buttons
  ```

### useMemo优化React Hooks程序性能

* `useMemo`主要用来解决使用React hooks产生的无用渲染的性能问题。

* 使用function的形式来声明组件，失去了`shouldCompnentUpdate`（在组件更新之前）这个生命周期，也就是说我们没有办法通过组件更新前条件来决定组件是否更新。而且在函数组件中，也不再区分`mount`和`update`两个状态，这意味着函数组件的每一次调用都会执行内部的所有逻辑，就带来了非常大的性能损耗。`useMemo`和`useCallback`都是解决上述性能问题的.

* 核心代码

  ```javascript
  // useMemo 优化性能
  // 使用useMemo，然后给她传递第二个参数，参数匹配成功，才会执行
  const actionXiaohong = useMemo(() => changeXiaohong(name), [name])
  ```

### useRef获取DOM元素和保存变量

* `useRef`有两个主要的作用:
  * 用`useRef`获取React JSX中的DOM元素，获取后你就可以控制DOM的任何东西了。但是一般不建议这样来作，React界面的变化可以通过状态来控制。
  * 用`useRef`来保存变量
* 代码展示

  ```javascript
  import React, { useRef, useState, useEffect } from 'react';
  
  function Example() {
    const inputEl = useRef(null)
  
    const onButtonClick = () => {
      inputEl.current.value = 'hello Jspang'
      console.log(inputEl) //输出获取到的DOM节点
    }
  
    // useRef保存普通变量
    const [text, setText] = useState('hello')
    const textRef = useRef()
    useEffect(() => {
      textRef.current = text
      console.log('textRef.current:', textRef.current)
    })
  
    return (
      <>
        {/*保存input的ref到inputEl */}
        <input ref={inputEl} type='text' />
        <button onClick={onButtonClick}>在input上展示文字</button>
        <br/>
        <br />
        <input type='text' value={text} onChange={(e)=>{setText(e.target.value)}}/>
      </>
    )
  }
  
  export default Example
  ```
