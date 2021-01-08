import React from "react";

function Button(props){
    const {classList = [], href = ""} = props;
    return <a className={classList.join(' ')} href={href}>{props.text}</a>
}

export default Button;