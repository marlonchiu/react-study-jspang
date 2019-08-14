import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './pages/Index'
//--关键代码------------start
import Video from './pages/Video'
import WorkPlace from './pages/WorkPlace'
//--关键代码------------end
import './assets/index.css'

// 模拟动态导航菜单
let routeConfig = [
  {
    path: '/',
    title: '博客首页',
    component: Index,
    exact: true
  },
  {
    path: '/video/',
    title: '视频教程',
    component: Video,
    exact: false
  },
  {
    path: '/workplace/',
    title: '职场技能',
    component: WorkPlace,
    exact: false
  }
]

const AppRouter = () => {
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            {
              routeConfig.map((item, index) => {
                return (
                  <li key={index}> <Link to={item.path}>{item.title}</Link> </li>
                )
              })
            }
          </ul>
        </div>
        <div className="rightNav">
          {
            routeConfig.map((item, index) => {
              return (
                <Route key={index} path={item.path} exact={item.exact} component={item.component} />
              )
            })
          }
        </div>
      </div>
    </Router>
  )
}
 
export default AppRouter;