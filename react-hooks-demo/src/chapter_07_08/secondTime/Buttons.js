import React, {useContext} from 'react'
import { ColorContext, UPDATE_COLOR } from './Color'

function Buttons() {
  // 核心代码 --start
  const { dispatch } = useContext(ColorContext)
  // 核心代码 --end
  return (
    <div>
      <button onClick={() =>{dispatch({type:UPDATE_COLOR, color: 'red'})}}>红色</button>
      <button onClick={() =>{dispatch({type:UPDATE_COLOR, color: 'purple'})}}>紫色</button>
    </div>
  )
}

export default Buttons