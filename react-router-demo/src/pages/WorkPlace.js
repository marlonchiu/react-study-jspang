import React from 'react'
import { Route, Link } from 'react-router-dom'

import MoneyPage from './workplace/MoneyPage'
import GetUpPage from './workplace/GetUpPage'

function WorkPlace() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/workplace/moeny">程序员加薪秘籍</Link></li>
          <li><Link to="/workplace/getup">程序员早起攻略</Link></li>           
        </ul>
      </div>
      <div className="videoContent">
        <h3>职场软技能</h3>
        <Route path='/workplace/moeny/' component={MoneyPage}/>
        <Route path='/workplace/getup/' component={GetUpPage}/>
      </div>
    </div>
  )
}

export default WorkPlace