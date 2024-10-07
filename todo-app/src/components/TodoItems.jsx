import React from 'react'
import blank from './assets/blank.png'
import tick from './assets/tick.png'
import cross from './assets/cross.png'
import './styles/TodoItems.css'

const TodoItems = ({no, display, text, setTodos}) => {

  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"))
    data = data.filter((todo) => todo.no !== no)
    setTodos(data)
  }

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"))
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through"
        } else {
          data[i].display = ""
        }
        break
      }
    }
    setTodos(data)
  }

  return (
    <div className="todoitems">
      <div className={`todoitems-container ${display}`} onClick={() => {toggle(no)}}>
        {display==="" ? <img src={blank} alt="blank icon" /> : <img src={tick} alt="tick icon" />}
        <div className="todoitems-text">{text}</div>
      </div>
      <img className="todoitems-cross-icon" onClick={() => {deleteTodo(no)}} src={cross} alt="cross items" />
    </div>
  )
}

export default TodoItems
