// React Hooks写法
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Index() {
    useEffect(() => {
        console.log(`useEffect=>欢迎来到Index页面`)
        // 解绑事件
        return  () => {
            console.log(`你离开Index页面了`)
        }
    }, [])
    return <h2>Index page!</h2>
}

function List() {
    useEffect(() => {
        console.log(`useEffect=>欢迎来到List页面`)
    }, [])
    return <h2>List page!</h2>
}

function ExampleHooks3() {
    const [count, setCount] = useState(0) // 数组的解构
    useEffect(() => {
        console.log(`useEffect=>You clicked ${count} times`)
        return ()=>{
            console.log('====================')
        }
    }, [count])
    
    return (
        <div>
            <p>you click {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <Router>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/list/'>列表</Link></li>
                </ul>
                <Route path='/' exact component={Index}/>
                <Route path='/list/' component={List}/>
            </Router>
        </div>
     );
}
export default ExampleHooks3;