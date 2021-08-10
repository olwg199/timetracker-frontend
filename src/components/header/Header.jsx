import React from "react";
import Button from "../general/Button";
import logo from "./logo.svg";
import { logout, refresh } from "../../actions/usersActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

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
                <img src={logo} alt="Logo" />
            </div>
            {isAuth ?
                <div className="login-area">
                    {`Hello ${user.username}!`}
                    <Button classList={["btn"]} text="Log Out" onClick={() => { dispatch(logout()) }} />
                </div>
                :
                <div className="login-area">
                    <Button classList={["btn", "btn-signin"]} text="Sign In" href="/login" />
                    <Button classList={["btn", "btn-signup"]} text="Sign Up" />
                </div>
            }

        </header>)
}

export default Header;