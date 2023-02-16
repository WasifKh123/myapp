import React, { useContext, useState } from "react";
import Home from "./home";
import ColorContext from "./colorContext";
import classNames from "classnames";
export default function State() {
  const [count, setCount] = useState(0);
  const color = useContext(ColorContext)
  return (
    <div>
      <Home />
      <div style={{ textAlign: "center" }}>
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
  );
}
