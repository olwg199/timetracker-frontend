import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentView } from "../../actions";
import Button from "../general/Button";

function TimeRangeButtons() {
    const dispatch = useDispatch();
    const ranges = ["Year", "Month", "Week", "Today"]


    React.useEffect(() => {
        const buttons = document.querySelectorAll(".btn-range-item");
        for (let btn of buttons) {
            btn.addEventListener("click", (event) => {
                dispatch(setCurrentView(event.target.text));
            })
        }
    });

    return (
        <section id="time-range-area">
            <div className="container">
                {ranges.map((range, index) => {
                    return <Button text={range} classList={["btn", "btn-range-item"]} href={range.toLowerCase()} key={index} />
                })}
            </div>
        </section>
    );
}


export default TimeRangeButtons;