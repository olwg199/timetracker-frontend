import React from "react";

function Button({ text, href, onClick, classList }) {
    return <a className={classList !== undefined ? classList.join(" ") : ""} href={href} onClick={onClick}>{text}</a>
}

export default Button;