import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
  function goToB() {
    Router.push("/jspangB")
  }
  function gotoXiaojiejie() {
    // Router.push("/xiaojiejie?name=穆念慈")
    Router.push({
      pathname: '/xiaojiejie',
      query: {
        name: '穆念慈'
      }
    })
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
      <br/>
      <Link href="/xiaojiejie?name=小龙女"><a>选择小龙女</a></Link><br/>
      <Link href="/xiaojiejie?name=黄蓉"><a>选择黄蓉</a></Link><br/>
      <Link href={{pathname:'/xiaojiejie', query:{name: '赵敏'}}}><a>选择赵敏</a></Link>
      <br/>
      <button onClick={gotoXiaojiejie}>穆念慈</button>
    </>
  ) 
}

export default Home