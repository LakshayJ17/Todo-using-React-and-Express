import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  // fetch("http://localhost:3000/todos")
  //   .then(async function (res) {
  //     const json = await res.json()
  //     setTodos(json.todos)
  //   })

  return (
    <>
      <CreateTodo />
      {/* <Todos todos={todos} /> */}
      <Todos />
    </>
  )
}

export default App
