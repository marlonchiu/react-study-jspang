import React, { Component, Fragment } from 'react';
import XiaojiejieItem from './XiaojiejieItem'
import './style.css'
import axios from 'axios'
import Boss from './Boss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
        this.deleteItem = this.deleteItem.bind(this)
    }

    // componentDidMount() {
    //     console.log('componentDidMount---- 组件挂载完成阶段')
    // }

    // componentWillMount(){
    //     console.log('componentWillMount----组件将要挂载到页面的时刻')
    // }

    // shouldComponentUpdate() {
    //     console.log('1 - shouldComponentUpdate')
    //     return true
    // }
    // componentWillUpdate() {
    //     console.log('2 - componentWillUpdate')
    // }
    // componentDidUpdate() {
    //     console.log('4 - componentDidUpdate')
    // }

    // 获取数据
    componentDidMount() {
        // axios.get('https://www.easy-mock.com/mock/5d29884e1606441867ef386c/reactdemo03/xiaojiejie/list')
        //     .then((res) => {
        //         console.log('axios 获取数据成功')
        //         console.log(JSON.stringify(res))
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
        axios({
            method: 'get',
            url: 'https://www.easy-mock.com/mock/5d29884e1606441867ef386c/reactdemo03/xiaojiejie/list'
        }).then((res) => {
                console.log('axios 获取数据成功')
                console.log(JSON.stringify(res))
            this.setState({
                    list: res.data.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    

    render() { 
        // console.log('3 - render----组件渲染页面的时刻')

        return ( 
            <Fragment>
                {/* 添加注释 */}
                <div>
                    <label htmlFor='handle_input'>增加服务：</label>
                    <input
                        ref={(input) => {this.input = input}}
                        className='input'
                        id='handle_input'
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                    {/* 
                                <li
                                    key={index + item}
                                    onClick={this.deleteItem.bind(this, index)}
                                    dangerouslySetInnerHTML={{__html:item}}
                                ></li>
                     */}
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <CSSTransition
                                        timeout={1000}
                                        classNames='boss-text'
                                        unmountOnExit
                                        appear={true}
                                        key={index+item}  
                                    >
                                        <Fragment>
                                            <XiaojiejieItem
                                                content={item}
                                                index={index}
                                                // 关键代码  删除条目---------start
                                                deleteItem={this.deleteItem.bind(this)}
                                                // 关键代码  删除条目---------end
                                            />
                                        </Fragment>
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                    
                </ul>
                <Boss />
            </Fragment>
         )
    }

    // input改变
    inputChange(e) {
        // console.log(this.input.value)
        // console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }

    // 增加项目
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => {
            console.log(this.ul.querySelectorAll('li').length)
        });
        
        // this.setState 属于异步操作  操作完成后可以添加事件 
    }

    // 删除
    deleteItem(index) {
        // 错误操作  React是禁止直接操作state的
        // this.state.list.splice(index, 1)
        // this.setState({
        //     list:this.state.list
        // });

        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        });
    }
}
 
export default Xiaojiejie;