import React from "react";
import TodoList from "./TodoList";

function Week(props) {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return (
        <div className="days">
            {generateWeekStructure(dayNames)}
        </div>
    );
}

function generateWeekStructure(dayNames) {
    return dayNames.map((dayName, index) => {
        return (
            <div className="day">
                <div className="title">
                    {dayName}
                </div>
                <TodoList />
            </div>
        );
    });
}

export default Week;