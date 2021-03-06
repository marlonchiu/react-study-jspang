import React, { useState } from 'react'
// import moment from 'moment'

// 组件懒加载
import dynamic from 'next/dynamic'
const One = dynamic(import('../components/one'))

function Time() {
  const [nowTime, setTime] = useState(Date.now())
  // 粗糙写法
  // const changeTime = () => {
  //   setTime(
  //     moment(Date.now()).format()
  //   )
  // }
  // 懒加载
  const changeTime = async () => {
    const moment = await import('moment') // 等待moment加载完成
    setTime(
      moment.default(Date.now()).format()
    )
  }

  return (
    <>
      <div>显示当前时间：{nowTime}</div>
      <One />
      <div><button onClick={changeTime}>改变时间格式</button></div>
    </>
  )
}


export default Time