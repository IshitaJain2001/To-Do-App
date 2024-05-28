import React from 'react'

export default function List({todos,removeTodos}) {

  return (
<ul>
   {todos.map((val,index)=>( 
    <li key={index}>{val}
    <button onClick={()=>removeTodos(index)}>remove</button>
    </li>
   )
)}
</ul>
  

)

}
