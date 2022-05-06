import React, {useState} from "react";

export function Input(props){
    const [currentValue, setCurrentValue] = useState('')
    const onChange = (e) => {
        if (props.onChange) {
            props.onChange(e.target.value)
        }
        setCurrentValue(e.target.value)}



    return(<input value={currentValue} onBlur={props.onEditFinish} disabled={props.disabled} 
        onChange={onChange}/>)
}
