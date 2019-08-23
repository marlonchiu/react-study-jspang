import React, {useContext} from 'react'
import {ColorContext, UPDATE_COLOR} from './Color'
function Buttons() {
  const {dispatch} = useContext(ColorContext)
  return (
    <div style={{display: 'flex'}}>
      <button onClick={() => dispatch({type: UPDATE_COLOR, color: 'red'})}>红色</button>
      <button onClick={() => dispatch({type: UPDATE_COLOR, color: 'green'})}>绿色</button>
    </div>
  )
}

export default Buttons