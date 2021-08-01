import React, { useState } from "react";
import "../../css/taskView.css";
import TimeHelper from "../../helpers/TimeHelper";
import Stopwatch from "../general/Stopwatch";

function TasksView(props) {
    const [task, setTask] = useState(props.task);

    return (
        <div className="task-item">
            <div className="task-item_title">{task.title}</div>
            <div className="task-item_time">
                <i className="far fa-clock"></i>{TimeHelper.getTimeBySeconds(task.time)}
            </div>
            <Stopwatch />
        </div>
    );
}

export default TasksView;