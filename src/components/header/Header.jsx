import React from "react";
import Button from "components/UI/Button";
import logo from "./logo.svg";
import { logout, refresh } from "actions/user-actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

function Header() {
  const dispatch = useDispatch();
  const { user, isAuth } = useSelector((state) => state.user);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(refresh());
    }
  }, [dispatch, isAuth]);

  return (
    <header id="header">
      <div className={styles.logo}>
        <Link to="/" alt="Home page">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      {isAuth ? (
        <div className={styles.loginArea}>
          {`Hello ${user.username}!`}
          <Button
            text="Log Out"
            onClick={() => {
              dispatch(logout());
            }}
          />
        </div>
      ) : (
        <div className={styles.loginArea}>
          <Button classList={[styles.btnSignin]} href="/login">
            Sign In
          </Button>
          <Button classList={[styles.btnSignup]} href="/register">
            Sign Up
          </Button>
        </div>
      )}
    </header>
  );
}

export default Header;
