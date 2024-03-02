import React from "react";
import './style.css'
const Input = (props) =>{
    const {type, onChange, value, placeholder, name} = props;
    return(
        <React.Fragment>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                name={name}
                className='input'
            />
        </React.Fragment>
    )
}
export default Input;