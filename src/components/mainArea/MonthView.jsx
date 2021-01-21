import React from "react";
import { useSelector } from "react-redux";
import MainAreaTitle from "../general/MainAreaTitle";
import Month from "../general/Month";


function MonthView(props) {
    const month = useSelector(state => state.month);

    return (
        <section className="month-view">
            <MainAreaTitle title={props.title} />
            <Month month={month} />
        </section>
    );
}

export default MonthView;