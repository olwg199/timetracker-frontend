import React from "react";
import Button from "../general/Button";

function TimeRangeArea() {
    const ranges = ["Year", "Month", "Week", "Today"]

    return (
        <section id="time-range-area">
            <div className="container">
                {ranges.map((range, index) => {
                    return <Button text={range} classList={["btn", "btn-range-item"]} key={index} />
                })}
            </div>
        </section>
    );
}

export default TimeRangeArea;