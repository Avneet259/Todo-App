import React from 'react'
import blank from './assets/blank.png'
import tick from './assets/tick.png'
import cross from './assets/cross.png'
import './styles/TodoItems.css'

const TodoItems = ({no, display, text}) => {
  return (
    <div className="todoitems">
      <div className="todoitems-container">
        <img src={blank} alt="blank icon" />
        <img src={tick} alt="tick icon" />
        <div className="todoitems-text">{text}</div>
      </div>
      <img className="todoitems-cross-icon" src={cross} alt="cross items" />
    </div>
  )
}

export default TodoItems
