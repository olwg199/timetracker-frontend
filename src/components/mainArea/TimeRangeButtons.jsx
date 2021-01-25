import React from "react";
import Button from "../general/Button";

function TimeRangeButtons() {
    const currentView = loadCurrentViewToLocalStorage().toLowerCase();
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
                saveCurrentViewToLocalStorage(event.target.text);
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

function saveCurrentViewToLocalStorage(currentView){
    try {
        const serializedState = JSON.stringify(currentView);
        localStorage.setItem("currentView", serializedState);
    } catch(e) {
        console.log(e);
    }
}

function loadCurrentViewToLocalStorage(){
    try {
         const serializedState = localStorage.getItem("currentView");
         if(serializedState === null ) return undefined;
         return JSON.parse(serializedState);
    } catch(e) {
        console.log(e);
        return undefined;
    }
}

export default TimeRangeButtons;