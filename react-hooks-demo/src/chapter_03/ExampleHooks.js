import React, {useState, useEffect} from 'react'

function Example() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`useEffect=>You clicked ${count} times`)
  })

  return (
    <div>
      <p>you click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default Example

/**
 useEffect两个注意点
 
    React首次渲染和之后的每次渲染都会调用一遍useEffect函数，
    而之前我们要用两个生命周期函数分别
    表示首次渲染(componentDidMonut)和更新导致的重新渲染(componentDidUpdate)。

    useEffect中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时异步执行的，
    而componentDidMonut和componentDidUpdate中的代码都是同步执行的。
    个人认为这个有好处也有坏处吧，比如我们要根据页面的大小，
    然后绘制当前弹出窗口的大小，如果时异步的就不好操作了
 */