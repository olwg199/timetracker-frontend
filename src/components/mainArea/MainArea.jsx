import React from "react";
import YearView from "./YearView"
import TimeRangeButtons from "./TimeRangeButtons"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Month from "../general/Month"
import { useSelector } from "react-redux";

function MainArea(props) {
    const todayDate = new Date();
    const month = useSelector(state => state.month);

    return (
        <Router>
            <section id="main-area">
                <TimeRangeButtons />


                <div className="container">

                    <Switch>
                        <Route path={["/", "/year"]} exact>
                            <div className="main-area-title">
                                <span>{todayDate.getFullYear()}</span>
                            </div>
                            <YearView />
                        </Route>

                        <Route path="/month">
                            <div className="main-area-title">
                                <span>{todayDate.toLocaleDateString("en-US", { month: 'long' })}</span>
                            </div>
                            <Month month={month} />
                        </Route>
                    </Switch>
                </div>

            </section>
        </Router>

    );
}

export default MainArea;