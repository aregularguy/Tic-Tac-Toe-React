import React, { useEffect, useState } from 'react'

// interface for todo
interface todoitem {
    id: number,
    text: string,
    completed: boolean 
}

interface TodoProps {
    data: todoitem[]
}

const Todo: React.FC<TodoProps> = ({ data }) => {
  const [localtodo, setLocaltodo] = useState<todoitem[]>([])
  
  useEffect(() => {
    const storedTodos = localStorage.getItem('todo')
    if(storedTodos) {
      const parsedTodos = JSON.parse(storedTodos) as todoitem[]
      setLocaltodo([...parsedTodos, ...data])
    }
  },[data])
  // const removeItem = (item : todoitem) => {

  //   if()
  // }

  return (
    <div>
      <ul className="todo-list">
        {data && data.length > 0 ? (
          data.map(item => (
            <li key={item.id} className="todo-item">
              <span>{item.text}</span>
            </li>
          ))
        ) : (
          <li>No tasks yet. Add one above!</li>
        )}
      </ul>
    </div>
  )
}

export default Todo