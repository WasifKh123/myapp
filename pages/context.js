import React, { useContext } from "react";
import Home from "./home";
import classNames from "classnames";
import ColorContext from "./colorContext";
export default function Context() {
  const color = useContext(ColorContext);
  return (
    <div>
      <Home />
      <div style={{ textAlign: "center", paddingTop: "10px" }}>
          <button onClick={color.updateColor} className={classNames('mybutton',{'mybutton-activated':!color.state})}>
            {
              color.state?<>white</>:<>black</>
            }
            </button>
        
      </div>
    </div>
  );
}
