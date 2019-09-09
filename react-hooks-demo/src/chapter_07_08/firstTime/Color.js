// 颜色共享组件
import React, { createContext, useReducer } from 'react'

export const ColorContext = createContext({})

export const UPDATE_COLOR = "UPDATE_COLOR"
export const reducer = (state, action) => {
  switch (action.type) {
      case UPDATE_COLOR:
          return action.color
      default:
          return state
  }
}

export const Color = props => {
  // 共享出去的状态变成了color和dispatch,如果不共享出去dispatch，你是没办法完成按钮的相应事件的
  const [color, dispatch] = useReducer(reducer, 'blue')
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  )
}
