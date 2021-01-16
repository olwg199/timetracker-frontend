import React from "react";
import DateHelper from "../../helpers/dateHelper";

function Month(props) {

    return (
        <div className="month">
            <table>
                <caption>{props.month.name}</caption>
                <thead>
                    <tr>
                        <th>S</th>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>T</th>
                        <th>F</th>
                        <th>S</th>
                    </tr>
                </thead>
                <tbody>
                    {generateMonthViewStructure(props.month)}
                </tbody>
            </table>
        </div>
    )
}

function generateMonthViewStructure(month, cellsInRow = 7) {
    let structure = { tr: [], td: [] };

    //Shift cells of table to match first day of the month with column named as first day of the month.
    //If row needs to be shifted by it's length - just don't shift it.
    if (DateHelper.getDayNumberByName(month.firstWeekday) !== cellsInRow) {
        for (let i = 0; i < DateHelper.getDayNumberByName(month.firstWeekday); i++) {
            structure.td.push(<td key={i}></td>)
        }
    }

    //Add structure of the month based on amount of days
    for (let i = 0; i < month.amountOfDays; i++) {
        if (structure.td.length % 7 === 0 && structure.td.length !== 0) {
            structure.tr.push(<tr key={structure.tr.length + 1}>{[...structure.td]}</tr>)
            structure.td = [];
        }
        structure.td.push(<td key={structure.td.length + 1}>{i + 1}</td>);
    }

    //Always push last row to the month structure
    structure.tr.push(<tr key={structure.tr.length + 1}>{[...structure.td]}</tr>);
    return structure.tr;
}

export default Month;