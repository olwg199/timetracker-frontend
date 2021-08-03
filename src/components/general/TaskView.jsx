import React, { useState } from "react";
import "../../css/taskView.css";
import TimeHelper from "../../helpers/TimeHelper";
import Stopwatch from "../general/Stopwatch";
import AddTaskView from "../mainArea/AddTaskView";
import Modal from "../general/Modal";

function TaskView({ task, deleteTask, updateSpentTime }) {
    const [updateTaskViewActive, setUpdateTaskViewActive] = useState(false);

    return (
        <div className="task-item">
            <div className="task-item_title">{task.title}</div>
            <div className="task-item_time">
                <i className="far fa-clock"></i>{TimeHelper.getTimeBySeconds(TimeHelper.getSecondsFromMinutes(task.time))}
            </div>
            <Stopwatch saveTime={updateSpentTime} />
            <div className="task-item_edit" onClick={() => { setUpdateTaskViewActive(true) }}><i className="fas fa-pen-square"></i></div>
            <div className="task-item_delete" onClick={deleteTask}><i className="fas fa-trash-alt"></i></div>

            <Modal active={updateTaskViewActive} setActive={setUpdateTaskViewActive} title="Update Task">
                <AddTaskView currentTask={task} setActive={setUpdateTaskViewActive} />
            </Modal>
        </div>
    );
}

export default TaskView;