import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

// 无状态组件
// React中的无状态组件，如果是以前没有Redux的时候，实现分离是比较困难的，
// 但是现在我们作项目，一定想着找个组件是否可以作成无状态组件。
// 如果能做成无状态组件就尽量作成无状态组件，毕竟性能要高很多。

const TodoListUI = (props) => {
    return ( 
        <div style={{margin: '10px'}}>
            <div>
                <Input
                    placeholder={props.inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button type="primary"
                    onClick={props.handleAddItem}>增加</Button>
            </div>
            <div style={{width: '300px', marginTop: '10px',}}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={
                        (item, index) =>
                            <List.Item
                                onClick={() => {props.handleDeleteItem(index)}}
                            >{item}</List.Item>}
                />
            </div>
        </div>
    );
}

// class TodoListUI extends Component {
    
//     render() { 
//         return ( 
//             <div style={{margin: '10px'}}>
//                 <div>
//                     <Input
//                         placeholder={this.props.inputValue}
//                         style={{ width: '250px', marginRight: '10px' }}
//                         onChange={this.props.changeInputValue}
//                         value={this.props.inputValue}
//                     />
//                     <Button type="primary"
//                         onClick={this.props.handleAddItem}>增加</Button>
//                 </div>
//                 <div style={{width: '300px', marginTop: '10px',}}>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={
//                             (item, index) =>
//                                 <List.Item
//                                     onClick={() => {this.props.handleDeleteItem(index)}}
//                                 >{item}</List.Item>}
//                     />
//                 </div>
//             </div>
//         );
//     }
// }
 
export default TodoListUI;