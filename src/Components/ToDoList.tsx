import React, { useEffect, useState } from 'react'
import Todo from './Todo'

interface todoitem {
    id:number,
    text:string,
    completed:boolean 
}

const ToDoList = () => {
    const[todo, setTodo] = useState<todoitem[]>(() =>{
      const savedTodos = localStorage.getItem('todo')
      return savedTodos ? JSON.parse(savedTodos) : [] 
    })
    const[input, setInput] = useState<string>('')
    
    // Save todos to localStorage when they change
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo))
        console.log(todo)
    },[todo])
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        if(input.trim()) {
            setTodo([...todo, {id:Date.now(), text:input, completed:false}])
            setInput('')
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    value={input} 
                    onChange={handleChange} 
                    placeholder='Add a task'
                />
                <button type='submit'>Add</button>
            </form>  
            <Todo data={todo} />
        </div>
    )
}

export default ToDoList