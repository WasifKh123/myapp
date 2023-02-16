import classNames from 'classnames'
import React, { useContext } from 'react'
import ColorContext from './colorContext'
import { memo } from 'react'
 function Todo({todo,addtodo}) {
    const color = useContext(ColorContext)
    console.log(todo[0]);   
  return (
    <div>
        <h1>Todo</h1>
         {todo.map((value,index)=>
         {return (<p key={index}>{value} {index}</p>)}
         )}
         <button onClick={addtodo} className={classNames("mybutton",{'mybutton-activated':!color.state})}>add todo</button>

    </div>
    
  )
}
export default memo(Todo);
