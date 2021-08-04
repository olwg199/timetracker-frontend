import React from "react";
import logo from "./logo.svg"
// import Button from "../general/Button";

function Header() {
    return (
        <header id="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            {/* <div className="login-area">
                <Button classList={["btn", "btn-signin"]} text="Sign In" />
                <Button classList={["btn", "btn-signup"]} text="Sign Up" />
            </div> */}
        </header>)
}

export default Header;