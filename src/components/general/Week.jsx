import React from "react";

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
                <ul className="todo-list">
                    <li className="todo-list-item">
                        <div className="description">
                            Lorem ipsum dolor  amet
                        </div>
                        <div className="action-buttons">
                            <i class="fas fa-trash-alt"></i>
                        </div>
                    </li>
                    <li className="todo-list-item">
                        <div className="description">
                            Lorem ipsum  sit amet
                        </div>
                        <div className="action-buttons">
                            <i class="fas fa-trash-alt delete"></i>
                        </div>
                    </li>
                </ul>
            </div>
        );
    });
}

export default Week;