import React, { Component } from 'react';
import TodoListUI from './TodoListUI'

import store from './store'
import {
    changeInputAction,
    addItemAction, 
    deleteItemAction,
    getTodoList
} from './store/actionCreators'
// import axios from 'axios'
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

    componentDidMount() {
        const action = getTodoList()
        store.dispatch(action)

        // axios.get('https://www.easy-mock.com/mock/5d2dee54de00e614545eaff3/getList').then((res)=>{
        //     // console.log(res)
        //     const data = res.data.data
        //     const action = getListAction(data)
            
        // })
    }

    render() { 
        return ( 
            <TodoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                handleAddItem={this.handleAddItem}
                list={this.state.list}
                handleDeleteItem={this.handleDeleteItem}
            />
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

    handleDeleteItem(index) {
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