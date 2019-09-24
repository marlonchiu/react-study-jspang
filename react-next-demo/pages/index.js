import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
  // 路由发生变化时
  Router.events.on('routeChangeStart', (...args) => {
    console.log('1 -- routeChangeStart->路由开始变化,参数为:', ...args)
  })
  // 路由结束变化时
  Router.events.on('routeChangeComplete', (...args) => {
    console.log('2 -- routeChangeComplete->路由结束变化,参数为:', ...args)
  })
  
  // 浏览器history触发前
  Router.events.on('beforeHistoryChange', (...args) => {
    console.log('3 -- beforeHistoryChange->浏览器history触发前,参数为:', ...args)
  })
  // 路由跳转发生错误时  404找不到路由页面不算错误
  Router.events.on('routeChangeError', (...args) => {
    console.log('4 -- routeChangeError->路由跳转发生错误时,参数为:', ...args)
  })

  // hash跳转发生变化时
  Router.events.on('hashChangeStart', (...args) => {
    console.log('5 -- hashChangeStart->hash跳转开始变化,参数为:', ...args)
  })
  // hash跳转结束变化时
  Router.events.on('hashChangeComplete', (...args) => {
    console.log('6 -- hashChangeComplete->hash跳转结束变化,参数为:', ...args)
  })


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
      <div>
        <Link href="#jspang"><a>选JSPang</a></Link>
      </div>
    </>
  ) 
}

export default Home