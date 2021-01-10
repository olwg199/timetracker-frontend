import React from "react";
import Month from "../general/Month";

function MonthView() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    return (
        <div className="container">
            {
                generateYearViewStructure(monthNames, 4)
            }
        </div>

    );
}

function generateYearViewStructure(months, itemInRow = 4) {

    return months.reduce(function (acc, month, index, arr) {
        acc.Quarter.push(<Month month={month} />);

        //Logic of devading months into rows views.
        if ((index + 1) % itemInRow === 0 && index !== 0) {
            acc.Year.push(
                <div className="row">
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

export default MonthView;