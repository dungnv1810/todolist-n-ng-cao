import React from "react";
import './style.css'
const Button = (props) =>{
    const {name, style, onClick} = props
    return(
        <React.Fragment>
            <button className="btn" style={style} onClick={onClick}>{name}</button>
        </React.Fragment>
    )
}
export default Button;