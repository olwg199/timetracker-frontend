import React from "react";
import "../../css/taskView.css";
import TimeHelper from "../../helpers/TimeHelper";
import Stopwatch from "../general/Stopwatch";

function TasksView({ task, deleteTask, updateSpentTime }) {
    return (
        <div className="task-item">
            <div className="task-item_title">{task.title}</div>
            <div className="task-item_time">
                <i className="far fa-clock"></i>{TimeHelper.getTimeBySeconds(task.time)}
            </div>
            <Stopwatch saveTime={updateSpentTime} />
            <div className="task-item_edit"><i className="fas fa-pen-square"></i></div>
            <div className="task-item_delete" onClick={deleteTask}><i className="fas fa-trash-alt"></i></div>
        </div>
    );
}

export default TasksView;