import React from "react";
import Button from "components/UI/Button";
import logo from "./logo.svg";
import { logout, refresh } from "actions/user-actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import "css/Header/header.css";
import { Link } from "react-router-dom";

function Header() {
    const dispatch = useDispatch();
    const { user, isAuth } = useSelector(state => state.user);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(refresh());
        }
    }, [dispatch, isAuth]);

    return (
        <header id="header">
            <div className="logo">
            <Link to="/" alt="Home page">
                    <img src={logo} alt="Logo" />
            </Link>
            </div>
            {isAuth ?
                <div className="login-area">
                    {`Hello ${user.username}!`}
                    <Button classList={["btn"]} text="Log Out" onClick={() => { dispatch(logout()) }} />
                </div>
                :
                <div className="login-area">
                    <Button classList={["btn", "btn-signin"]} text="Sign In" href="/login" />
                    <Button classList={["btn", "btn-signup"]} text="Sign Up" href="/register" />
                </div>
            }

        </header>)
}

export default Header;