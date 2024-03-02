import React from "react";
import './style.css'
const Selectoption = (props) => {
    const {name, onchange, options, value, style} = props;
    return(
        <React.Fragment>
            <select name={name} onChange={onchange} value={value} style={style}>
                {options.map((item, index, array)=>{
                        return(
                            <option key={index} value={item}>{item}</option>
                        )
                    })
                }
            </select>
        </React.Fragment>
    )
}
export default Selectoption;