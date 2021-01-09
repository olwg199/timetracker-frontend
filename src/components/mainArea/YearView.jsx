import React from "react";
import Month from "../general/Month";

function MonthView() {
    // const monthNames = ["January", "February", "March", "April"];
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    return (
        <div className="container">
            <div className="row">

                {monthNames.reduce(function (acc, month, index) {
                    acc.push(<Month month={month} />);

                    if ((index + 1) % 4 === 0 && index !== 0) {
                        acc = [].concat(
                            <div className="row">
                                {acc}
                            </div>
                        );
                        return acc;
                    }
                    return acc;
                }, [])}
            </div>
            <div className="row">
                <Month month="May" />
                <Month month="June" />
                <Month month="July" />
                <Month month="August" />
            </div>
            <div className="row">
                <Month month="September" />
                <Month month="October" />
                <Month month="November" />
                <Month month="December" />
            </div>
        </div>

    );
}

export default MonthView;