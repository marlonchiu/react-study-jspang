import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import {connect} from 'react-redux'
import {changeInputAction, addItemAction, deleteItemAction} from './store/actions'
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
                        onChange={this.props.changeInput}
                        value={inputValue}
                    />
                    <Button type="primary"
                        onClick={this.props.handleAddItem}>增加</Button>
                </div>
                <div style={{width: '300px', marginTop: '10px',}}>
                    <List
                        bordered
                        dataSource={list}
                        renderItem={
                            (item, index) =>
                                <List.Item
                                    onClick={() => {this.props.handleDeleteItem(index)}}
                                >{item}</List.Item>}
                    />
                </div>
            </div>
            </div>
        );
    }
}

// const stateToProps = (state)=>{
//     return {
//         inputValue : state.inputValue
//     }
// }
const dispatchToProps = (dispatch) =>{
    return {
        changeInput(e){
            const data = e.target.value
            dispatch(changeInputAction(data))
        },
        handleAddItem() {
            dispatch(addItemAction())
        },
        handleDeleteItem(index) {
            dispatch(deleteItemAction(index))
        }

    }
}
export default connect(
    state => ({
        inputValue: state.inputValue, 
        list: state.list
    }),
    dispatchToProps
)(TodoList)