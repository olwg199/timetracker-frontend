import React from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.css";

function Button({ children, href, onClick, classList }) {
  return (
    <Link
      className={`${styles.btn} ${
        classList !== undefined ? classList.join(" ") : ""
      }`}
      to={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default Button;
