// useState是react自带的一个hook函数，它的作用是用来声明状态变量。

import React, { useState } from 'react'

function Example() {
  const [count, setCount] = useState(0)  // 数组解构赋值
  // 等价于
  // let _useState = useState(0)
  // let count = _useState[0]
  // let setCount = _useState[1]

  return (
    <div>
      <p>you click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default Example