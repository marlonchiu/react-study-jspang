import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true
        }
        this.toggleShow=this.toggleShow.bind(this)
    }
    render() { 
        return ( 
            <div>
                <CSSTransition
                    in={this.state.isShow}  // 用于判断是否出现的状态
                    timeout={2000}  // 动画持续时间
                    classNames="boss-text"  // className值，防止重复
                    unmountOnExit  // 控制刪除dom
                >
                    <div
                        className={this.state.isShow ? 'boss_show' : 'boss_hidden'}
                    >Boss级人物孙悟空</div>
                </CSSTransition>
                
                <button onClick={this.toggleShow}>召唤Boss</button>
            </div>
         );
    }

    toggleShow() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}
 
export default Boss;