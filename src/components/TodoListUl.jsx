/* eslint-disable react/prop-types */
import React from 'react'

// eslint-disable-next-line react/prop-types
const TodoListUl = ({todos, onDelete}) => {
    console.log("from UL: ", todos)
  return (
    <ul className="card">
    {todos.map((todo, index) => (
      <li key={index}>
        {todo}
        <button onClick={()=>onDelete(index)}>
            Delete
        </button>
        
    </li>
    ))}
  </ul>
  )
}

export default TodoListUl