import React from "react";

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
    for (let i = 0; i < getDayNumberByName(month.firstWeekday); i++) {
        structure.td.push(<td></td>)
    }

    //Add structure of the month based on amount of days
    for (let i = 0; i < month.amountOfDays; i++) {
        if (structure.td.length % 7 === 0) {
            structure.tr.push(<tr>{[...structure.td]}</tr>)
            structure.td = [];
        }
        structure.td.push(<td>{i + 1}</td>);
    }

    structure.tr.push(<tr>{[...structure.td]}</tr>);
    return structure.tr;
}

function getDayNumberByName(monthName) {
    const months = {
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
        sunday: 7
    }

    return months.[monthName];
}

export default Month;