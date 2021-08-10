import React, { useState } from 'react';
import Button from '../general/Button';
import InputGroup from "../general/InputGroup";
import "./loginForm.css"

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        setPassword("");
    }

    return (
        <div id="login-form">
            <InputGroup type="text" name="Username" setValue={(e) => { setUsername(e.target.value) }} value={username} />
            <InputGroup type="password" name="Password" setValue={(e) => { setPassword(e.target.value) }} value={password} />
            <Button text="Login" href="#" onClick={login} classList={["btn", "btn-login"]} />
        </div>
    )
}