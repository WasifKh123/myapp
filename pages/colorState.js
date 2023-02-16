import React, { useState } from 'react'
import ColorContext from './colorContext';
const ColorState = (props) => {
    const Blackcolor = true
    const [state, setColorState]=useState(Blackcolor)
    const updateColor = ()=>{

        setColorState((prevState)=>!prevState)
    }
  return (
    <ColorContext.Provider value={{state,updateColor}}>
        {props.children}
    </ColorContext.Provider>
    
  )
}
export default ColorState;
