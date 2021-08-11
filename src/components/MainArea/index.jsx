import React from "react";
import { Route, Switch } from "react-router-dom";
import Goals from "./Goals";
import LoginForm from "./LoginForm";

function MainArea(props) {
    return (
        <section id="main-area">
            <Switch>
                <Route exact path="/">
                    <Goals />
                </Route>
                <Route path="/login">
                    <LoginForm />
                </Route>
            </Switch>
        </section>
    );
}

export default MainArea;