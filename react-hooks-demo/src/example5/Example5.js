// React Hooks写法
import React, { useReducer} from 'react';

function Example5() {
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
export default Example5;

// function countReducer(state, action) {
//     switch (action.type) {
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         default:
//             return state
//     }
// }