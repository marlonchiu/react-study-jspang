import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
  function goToB() {
    Router.push("/jspangB")
  }
  return (
    <>
      <div>我是首页</div>
      <div>
        <Link href="/jspangA">
          <a>
            <span>去JspangA页面</span>
            <span>前端博客</span>
          </a>
          
        </Link>
      </div>
      <div>
        <Link href="/jspangB">
          <a>去JspangB页面</a>
        </Link>
      </div>
      <button onClick={() => Router.push("/jspangA")}>去JspangA页面</button>
      <button onClick={goToB}>去JspangB页面</button>
    </>
  ) 
}

export default Home