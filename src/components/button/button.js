import React from "react";

function Button(props){

    return(<button onClick={props.onClick} disabled={props.disabled}>{props.children}</button>)
}

export const myText = 'hi'

export default Button