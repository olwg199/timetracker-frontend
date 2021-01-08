import React from "react";
import Button from "../general/Button";

function Header() {
    return (
        <header id="header">
            <div className="container">
                <div className="logo">
                    <img src="./logo.svg" alt="Logo" />
                </div>
                <div className="login-area">
                    <Button classList={["btn", "btn-signin"]} text="Sign In"/>
                    <Button classList={["btn", "btn-signup"]} text="Sign Up"/>
                </div>
            </div>
        </header>)
}

export default Header;