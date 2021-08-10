import React, { useState } from 'react';
import Button from '../general/Button';
import InputGroup from "../general/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import "./loginForm.css"
import { login } from '../../actions/usersActions';

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
            <h3>You already logged in! <br />
                <a href="http://localhost:3000/"> Back to goals</a>
            </h3>

            :
            <div id="login-form">
                <InputGroup type="text" name="Username" setValue={(e) => { setUsername(e.target.value) }} value={username} />
                <InputGroup type="password" name="Password" setValue={(e) => { setPassword(e.target.value) }} value={password} />
                <Button text="Login" href="#" onClick={loginUser} classList={["btn", "btn-login"]} />
            </div>

    )
}