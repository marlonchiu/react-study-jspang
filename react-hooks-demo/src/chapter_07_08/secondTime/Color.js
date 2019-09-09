import React, { createContext, useReducer} from 'react';

export const ColorContext = createContext({})

// 核心代码 --start
export const UPDATE_COLOR = "UPDATE_COLOR"
const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color
    default:
      return state
  }
}
// 核心代码 --end

export const Color = props => {
  // 解构赋值
  // 核心代码 --start
  const [color, dispatch] = useReducer(reducer, 'blue')
  // 核心代码 --end
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  )
} 