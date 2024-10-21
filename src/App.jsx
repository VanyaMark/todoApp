import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm';
import Title from './components/Title';
import TodoListUl from './components/TodoListUl';

export default function App() {
  const userName = "Mar";
  const [todos, setTodos] = useState([
    "Reading my book", 
    "Washing dishes", 
    "Practice coding",
  ])

const addTodos = (todo) => {
  console.log(todo)
  setTodos([...todos, todo])
}

const deleteItem = (index) => {
  // console.log(index)
  // const searchedTodo = todos[index]
  // const todosUpdate = todos.filter(item => searchedTodo != item)
  // console.log("todos after splice: ", todos)
  // console.log("todosUpdate: ", todosUpdate)
  // setTodos(todosUpdate)

  const newTodos = [...todos]
  newTodos.splice(index, 1)
  console.log(newTodos)
  setTodos(newTodos)
}
  
  // const [inputValue, setInputValue] = useState('')

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (inputValue.trim()) {
  //     setTodos([...todos, inputValue])
  //   }
  //   setInputValue('')
  // }

  return (
    <>
      <header>
        To Do List
      </header>
      <Title name={userName} />
      <TodoListUl todos={todos} onDelete={(index)=>deleteItem(index)} />
      <p>
        You currently have <span className= {todos.length > 6 ? 'text-danger' : 'text-success'}>{todos.length}</span> todo items in your list!
      </p>

      <TodoForm addTodos={addTodos}/>
    </>
  )
}
