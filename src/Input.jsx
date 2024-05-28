import React, { useState } from 'react'

export default function Input({addTodos}) {
  let [todo,setTodo] = useState('')
  function submitt(e) {
    e.preventDefault()
addTodos(todo)
setTodo('')


  }
    return (
   
        <form onSubmit={submitt}>
<input type="text"
 placeholder='add any todo' 
 value={todo}
 onChange={e=>setTodo(e.target.value)}/>
 <button type="submit">add</button>
        </form>


  )
}
