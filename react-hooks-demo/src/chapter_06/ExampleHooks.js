// useReducer 实现redux效果

import React, { useReducer} from 'react';

function Example() {
  // useReducer 接收两个值一个是状态函数  一个初始值
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case 'increment':
        return state + 1
      case 'decrement':
        return state - 1
      default:
        return state
    }
  }, 60) 
  
  return (
    <div>
      <p>现在的值是： {count}</p>
      <button onClick={() => dispatch('increment')}>加一</button>
      <button onClick={() => dispatch('decrement')}>减一</button>
    </div>
  );
}
export default Example;

// 简易实现 reducer
// function countReducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     default:
//       return state
//   }
// }