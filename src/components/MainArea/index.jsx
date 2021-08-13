import React from "react";
import { Route, Switch } from "react-router-dom";
import Goals from "./Goals";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function MainArea(props) {
    return (
        <section id="main-area">
            <Switch>
                <Route exact path={["/", "/timetracker-frontend"]} >
                    <Goals />
                </Route>
                <Route path="/login">
                    <LoginForm />
                </Route>
                <Route path="/register">
                    <RegisterForm />
                </Route>
            </Switch>
        </section>
    );
}

export default MainArea;