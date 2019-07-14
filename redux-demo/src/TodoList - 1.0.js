import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
// import { ADD_ITEM, DELETE_ITEM} from './store/actionTypes'
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators'

class TodoList extends Component {
    constructor(props) {
        super(props)
        // console.log(store.getState())
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
        // ----------关键代码-----------start
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)  // 订阅Redux的状态
        // ----------关键代码-----------end
        // 如果 value={this.state.inputValue} 不写上边两条也不写
    }
    render() { 
        return ( 
            <div style={{margin: '10px'}}>
                <div>
                    <Input
                        placeholder={this.state.inputValue}
                        style={{ width: '250px', marginRight: '10px' }}
                        onChange={this.changeInputValue}
                        value={this.state.inputValue}
                    />
                    <Button type="primary"
                        onClick={this.handleAddItem}>增加</Button>
                </div>
                <div style={{width: '300px', marginTop: '10px',}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={
                            (item, index) =>
                                <List.Item
                                    onClick={this.handleDeleteItem}
                                >{item}</List.Item>}
                    />
                </div>
            </div>
         );
    }

    changeInputValue(e) {
        // const action = {
        //     type: CHANGE_INPUT,
        //     value: e.target.value
        // }

        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    handleAddItem(){
        // const action = {
        //     type: ADD_ITEM
        // }
        const action = addItemAction()
        store.dispatch(action)
    }

    handleDeleteItem(index){
        // console.log(index)
        // const action = {
        //     type: DELETE_ITEM,
        //     value: index
        // }
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState())
    }
}
 
export default TodoList;