import React from "react";
import './Button.css'

const Button = ({children, onclickHandler, ...props})=> {
    return(
        <button onClick={onclickHandler} className="Button" {...props}>{children}</button>
    )
}
export default Button;