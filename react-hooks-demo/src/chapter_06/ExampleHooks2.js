import React, {useReducer} from 'react'

function Example() {
  
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
      <p>第二遍--现在的值是： {count}</p>
      <button onClick={() => dispatch('increment')}>加一</button>
      <button onClick={() => dispatch('decrement')}>减一</button>
    </div>
  )

}

export default Example;