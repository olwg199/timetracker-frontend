import React from "react";
import Month from "../general/Month";

function MonthView() {
    // const monthNames = ["January", "February", "March", "April"];
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    return (
        <div className="container">
            {monthNames.reduce(function (acc, month, index, arr) {

                acc.Quarter.push(<Month month={month} />);

                if ((index + 1) % 4 === 0 && index !== 0) {
                    acc.Year.push(
                        <div className="row">
                            {acc.Quarter}
                        </div>
                    );
                    acc.Quarter = [];
                }
                if ((index + 1) === arr.length) {
                    return acc.Year;
                } else {
                    return acc;
                }
            }, { Quarter: [], Year: [] })}
        </div>

    );
}

export default MonthView;