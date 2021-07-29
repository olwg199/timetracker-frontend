import React, { useState } from "react";
import axios from "axios";

function TasksView(props) {
    const [taskList, setTaskList] = useState([])
    axios.get("https://timetracker-api-node.herokuapp.com/tasks")
        .then((result) => {
            setTaskList(result.data.tasks);
        })
        .catch((err) => {
            console.log(err);
        });
    return (
        <section className="task-list">
            {taskList ?
                taskList.map((task) => <h1 key={task._id}>{task.title}</h1>)
                :
                "Sorry, no tasks available"
            }
        </section>
    );
}

export default TasksView;