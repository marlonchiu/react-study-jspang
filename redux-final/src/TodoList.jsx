import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import {connect} from 'react-redux'

class TodoList extends Component {

    render() { 
        const { inputValue, list } = this.props
        return (
            <div>
                <div style={{margin: '10px'}}>
                <div>
                    <Input
                        placeholder={inputValue}
                        style={{ width: '250px', marginRight: '10px' }}
                        onChange={this.changeInputValue}
                        value={inputValue}
                    />
                    <Button type="primary"
                        onClick={this.handleAddItem}>增加</Button>
                </div>
                <div style={{width: '300px', marginTop: '10px',}}>
                    <List
                        bordered
                        dataSource={list}
                        renderItem={
                            (item, index) =>
                                <List.Item
                                    onClick={() => {this.handleDeleteItem(index)}}
                                >{item}</List.Item>}
                    />
                </div>
            </div>
            </div>
        );
    }

    // 监听改变
    changeInputValue = () => {
        
    }

    // 增减item
    handleAddItem = () => {

    }
    // 删除item
    handleDeleteItem = (index) => {
        console.log(index)
    }
}

// const stateToProps = (state)=>{
//     return {
//         inputValue : state.inputValue
//     }
// }

export default connect(
    state => ({
        inputValue: state.inputValue, 
        list: state.list
    }),
    {}
)(TodoList)