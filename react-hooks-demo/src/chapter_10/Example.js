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