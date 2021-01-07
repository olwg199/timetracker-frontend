import React from "react";

function Header() {
    return (
        <header id="header">
            <div className="container">
                <div className="logo">
                    <img src="./logo.svg" alt="Logo" />
                </div>
                <div className="login-area">
                    <button className="btn btn-signin">Sign In</button>
                    <button className="btn btn-signup">Sign Up</button>
                </div>
            </div>
        </header>)
}

export default Header;