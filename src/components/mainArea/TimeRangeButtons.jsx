import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentView } from "../../actions";
import Button from "../general/Button";

function TimeRangeButtons() {
    const currentView = useSelector(state => state.currentView);
    const dispatch = useDispatch();
    const ranges = ["Year", "Month", "Week", "Today"]


    React.useEffect(() => {
        const buttons = document.querySelectorAll(".btn-range-item");
        for (let btn of buttons) {
            const btnText = btn.text.toLowerCase();
            if(btnText === currentView){
                btn.classList.add('active')
            }

            btn.addEventListener("click", (event) => {
                console.log(event.target.text)
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