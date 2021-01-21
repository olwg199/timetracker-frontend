import React from "react";
import YearView from "./YearView"
import TimeRangeButtons from "./TimeRangeButtons"
import { Route, Switch } from "react-router-dom";
import MonthView from "./MonthView"
import WeekView from "./WeekView";
import MainAreaTitle from "../general/MainAreaTitle"

function MainArea(props) {
    const todayDate = new Date();


    return (
        <section id="main-area">
            <TimeRangeButtons />

            <div className="container">
                <MainAreaTitle title={todayDate.getDate()} />

                <Switch>
                    <Route path={["/", "/year"]} exact>
                        <YearView title={todayDate.getFullYear()} />
                    </Route>

                    <Route path="/month">
                        <MonthView title={todayDate.toLocaleDateString("en-US", { month: 'long' })} />
                    </Route>

                    <Route path="/week">
                        <WeekView />
                    </Route>
                </Switch>
            </div>

        </section>

    );
}

export default MainArea;