import React, { useState, useMemo } from 'react';

function Example() {
  const [xiaohong , setXiaohong] = useState('小红待客状态')
  const [zhiling, setZhiling] = useState('志玲待客状态')
  
  return (
    <>
      <button onClick={() => setXiaohong(new Date().getTime())}>小红</button>
      
      <button onClick={() => setZhiling(new Date().getTime() + '志玲来啦')}>志玲</button>
      <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
    </>
  )
}

function ChildComponent({ name, children }) {
  function changeXiaohong(name) {
    console.log('她来了，小红向我们走来了')
    return name+',小红向我们走来了'
  }

  // useMemo 优化性能
  // 使用useMemo，然后给她传递第二个参数，参数匹配成功，才会执行
  const actionXiaohong = useMemo(() => changeXiaohong(name), [name])
  
  return (
    <>
      <p>{actionXiaohong}</p>
      <p>{children}</p>
    </>
  )
}

export default Example