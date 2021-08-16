import React from "react";
import { Link } from "react-router-dom";

function Button({ text, href, onClick, classList }) {
  return (
    <Link
      className={classList !== undefined ? classList.join(" ") : ""}
      to={href}
      onClick={onClick}
    >
      {text}
    </Link>
  );
}

export default Button;
