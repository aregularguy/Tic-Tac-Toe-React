import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import ToDoList from './Components/ToDoList'

const initialVlaue = () => Array(9).fill(null)
function App() {
  const [board, setboard] = useState<any>(initialVlaue)

  return (
    <>
    <div className="game">
      <div className="app" >
        <h1> Todo List</h1>
      <ToDoList/>

      </div>
    </div>
     
    </>
  )
}

export default App
