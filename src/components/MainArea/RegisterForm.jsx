import React, { useState } from 'react';
import Button from 'components/UI/Button';
import InputGroup from "components/UI/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import { register } from 'actions/user-actions';
import { Redirect } from 'react-router-dom';

import "css/MainArea/registerForm.css";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const { isAuth } = useSelector(state => state.user);

    function registerUser() {
        dispatch(register(username, password, email));
        setPassword("");
    }

    return (

        isAuth ?
            <Redirect to="/" />
            :
            <div id="register-form">
                <InputGroup type="text" name="Username" setValue={(e) => { setUsername(e.target.value) }} value={username} />
                <InputGroup type="password" name="Password" setValue={(e) => { setPassword(e.target.value) }} value={password} />
                <InputGroup type="email" name="Email" setValue={(e) => { setEmail(e.target.value) }} value={email} />
                <Button text="Register" href="#" onClick={registerUser} classList={["btn", "btn-register"]} />
            </div>

    )
}