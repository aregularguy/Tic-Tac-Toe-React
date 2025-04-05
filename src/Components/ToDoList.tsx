import React, { useEffect, useState } from 'react'

interface todo {
    id:number,
    text:string,
    completed:boolean 
}
const ToDoList = () => {
    const[todo, setTodo] = useState<todo[]>([])
    const[input, setInput] = useState<any>('')

    useEffect(() => {
           
        // store todo in local storage
        localStorage.setItem('todo', JSON.stringify(todo))
        console.log(todo)
    },[todo])
    const handleChange = (e:any) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        setTodo([...todo, {id:Date.now(), text:input, completed:false}])
        setInput('')
    }
    
  return (
    <div>

          <form>
            
            <input type='text' value={input} onChange={handleChange} placeholder='Add a task'></input>
            <button type='submit'>Add</button>
            </form>  
    </div>
  )
}

export default ToDoList