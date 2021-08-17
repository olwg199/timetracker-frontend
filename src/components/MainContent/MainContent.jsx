import React from "react";
import { Route, Switch } from "react-router-dom";
import Goals from "./Goals/Goals";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";

import styles from "./MainContent.module.css";

function MainContent(props) {
  return (
    <section className={styles.mainContent}>
      <Switch>
        <Route exact path={["/", "/timetracker-frontend"]}>
          <Goals />
        </Route>
        <Route path={["/login", "/timetracker-frontend/login"]}>
          <LoginForm />
        </Route>
        <Route path={["/register", "/timetracker-frontend/register"]}>
          <RegisterForm />
        </Route>
      </Switch>
    </section>
  );
}

export default MainContent;
