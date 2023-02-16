import React, { useContext, useState ,useCallback} from 'react'
import Home from './home'
import Todo from './Todo';
import classNames from 'classnames';
import ColorContext from './colorContext';
export default function Callback() {
  const [todo,setTodo] = useState([]);
  const [count,setCount] = useState(0);
  const color = useContext(ColorContext);
const addtodo =  useCallback(()=>{    setTodo((prev)=>{
    return [...prev,`new entry`]
  })},[todo])
  return (
    <div><Home/>
    
    <div style={{ textAlign: "center" }}>
       <Todo todo={todo} addtodo={addtodo} />
        <span id="counter">{count}</span> <br />
        
        <button
          className={classNames("increment","mybutton",{'mybutton-activated':!color.state})}
          onClick={() => setCount((last) => last + 1)}
        >
          Increase Count
        </button>
        <button
          className={classNames("decrement","mybutton",{'mybutton-activated':!color.state})}
          onClick={() => setCount((last) => last - 1)}
        >
          Decrease Count{" "}
        </button>
      </div>


    </div>
  )
}
