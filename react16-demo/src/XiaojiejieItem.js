import React, { Component } from 'react';
import propTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    // 执行条件
    //     1、组件第一次存在于dom中，函数是不会被执行的
    //     2、如果已经存在于Dom中，函数才会被执行
    //  子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行
    // componentWillReceiveProps() {
    //     console.log('child - componentWillReceiveProps')
    // }

    // componentWillUnmount() {
    //     console.log('child - componentWillUnmount')
    // }

    // 性能优化
    shouldComponentUpdate(nextProps, nextState) {
        // if (nextProps.content !== this.props.content) {
        //     return true
        // } else {
        //     return false
        // }
        return nextProps.content !== this.props.content
    }

    render() { 
        console.log('child - render')
        return ( 
            <li onClick={this.handleClick}>
                {this.props.name} - {this.props.index} - {this.props.content}
            </li>
         );
    }

    handleClick() {
        // console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}

// propTypes校验
XiaojiejieItem.propTypes = {
    name: propTypes.string.isRequired,
    content: propTypes.string,
    index: propTypes.number,
    deleteItem: propTypes.func
}
// 默认值
XiaojiejieItem.defaultProps = {
    name: '阿丽塔'
}

export default XiaojiejieItem;