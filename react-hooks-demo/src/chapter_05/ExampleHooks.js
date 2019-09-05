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