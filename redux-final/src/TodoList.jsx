import React from 'react'
import { Input, Button, List } from 'antd'
import {connect} from 'react-redux'
import {changeInputAction, addItemAction, deleteItemAction} from './store/actions'

const TodoList = (props) => {
    const { inputValue, list, changeInput, handleAddItem, handleDeleteItem } = props
    return (
        <div>
            <div style={{margin: '10px'}}>
            <div>
                <Input
                    placeholder={inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={changeInput}
                    value={inputValue}
                />
                <Button type="primary"
                    onClick={handleAddItem}>增加</Button>
            </div>
            <div style={{width: '300px', marginTop: '10px',}}>
                <List
                    bordered
                    dataSource={list}
                    renderItem={
                        (item, index) =>
                            <List.Item
                                onClick={() => {handleDeleteItem(index)}}
                            >{item}</List.Item>}
                />
            </div>
        </div>
        </div>
    );
}// 拆分成无状态组件

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

// 无状态UI组件  只有一个render
// 无状态组件其实就是一个函数，它不用再继承任何的类（class），当然如名字所一样，也不存在state（状态）。
// 因为无状态组件其实就是一个函数（方法）, 所以它的性能也比普通的React组件要好。

// connect的作用是把UI组件（无状态组件）和业务逻辑代码的分开，
// 然后通过connect再链接到一起，让代码更加清晰和易于维护。这也是React - Redux最大的有点
export default connect(
    state => ({
        inputValue: state.inputValue, 
        list: state.list
    }),
    dispatchToProps
)(TodoList)