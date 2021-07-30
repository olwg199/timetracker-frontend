import React, { useState } from "react";

function TasksView(props) {
    const [task, setTaskList] = useState(props.task);
    return (
        <div className="task-item">
            <h3>{task.title}</h3>
        </div>
    );
}

export default TasksView;