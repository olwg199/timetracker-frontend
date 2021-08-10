import React from "react";
import { Route, Switch } from "react-router-dom";
import GoalsView from "../mainArea/GoalsView";
import LoginForm from "../LoginForm/LoginForm";

function MainArea(props) {
    return (
        <section id="main-area">
            <Switch>
                <Route exact path="/">
                    <GoalsView />
                </Route>
                <Route path="/login">
                    <LoginForm />
                </Route>
            </Switch>
        </section>
    );
}

export default MainArea;