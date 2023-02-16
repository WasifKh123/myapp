import classNames from "classnames";
import React, { useContext, useMemo, useState } from "react";
import Home from "./home";
import ColorContext from "./colorContext";
export default function memo() {
  const color = useContext(ColorContext)
  const [num,setNum] = useState(0);
  const [check,setCheck] = useState(true) 
  function calculateNum (num){
    console.log("this is a very complex function sadasdad");
    for(let i = 0 ;i<10000;i++ ){console.log("sad")}
    console.log("this is a very complex function 2");
    return num
  }
  const calNum=useMemo(()=>calculateNum(num),[num])
  return (
    <div>
      <Home />
      <div style={{ textAlign: "center" }}>
      {/* jab  koi string return krni ho tou kerley brakcet use kro  */}
      <button onClick={()=>setNum((prev)=>prev+1)} className={classNames("mybutton",{"mybutton-activated":!color.state})}>
        add number
      </button>
      <p>the number is: {calNum}</p>
      <button onClick={()=>setCheck((last)=>!last)} className={classNames("mybutton",{"mybutton-activated":!color.state})}>
        {check?"click me":"you clicked me"}
        </button>
        </div>
    </div>
  );
}
