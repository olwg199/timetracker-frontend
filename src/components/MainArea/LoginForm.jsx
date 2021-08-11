import React, { useState } from 'react';
import Button from 'components/general/Button';
import InputGroup from "components/general/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import "css/MainArea/loginForm.css";
import { login } from 'actions/usersActions';
import { Redirect } from 'react-router-dom';

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const { isAuth } = useSelector(state => state.user);

    function loginUser() {
        dispatch(login(username, password));
        setPassword("");
    }

    return (

        isAuth ?
            <Redirect to="/" />
            :
            <div id="login-form">
                <InputGroup type="text" name="Username" setValue={(e) => { setUsername(e.target.value) }} value={username} />
                <InputGroup type="password" name="Password" setValue={(e) => { setPassword(e.target.value) }} value={password} />
                <Button text="Login" href="#" onClick={loginUser} classList={["btn", "btn-login"]} />
            </div>

    )
}