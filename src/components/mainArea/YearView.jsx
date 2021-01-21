import React from "react";
import Month from "../general/Month";
import { useSelector } from "react-redux";

function YearView(props) {
    const year = useSelector(state => state.year);

    return (
        <div className="year-view">
            {generateYearViewStructure(year)}
        </div>
    );

}

function generateYearViewStructure(year, itemInRow = 4) {
    const months = Object.keys(year);

    return months.reduce(function (acc, month, index, arr) {
        acc.Quarter.push(<Month month={year.[month]} key={index} />);

        //Logic of devading months into rows views.
        if ((index + 1) % itemInRow === 0 && index !== 0) {
            acc.Year.push(
                <div className="row" key={acc.Year.length + 1}>
                    {acc.Quarter}
                </div>
            );
            acc.Quarter = [];
        }

        //If last item - return generated view for year
        if ((index + 1) === arr.length) {
            return acc.Year;
        } else {
            return acc;
        }

    }, { Quarter: [], Year: [] })

}

export default YearView;