import React, { useState } from "react";
import axios from "axios";
import TaskView from "../general/TaskView";

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
                taskList.map((task) => <TaskView task={task} key={task._id} />)
                :
                "Sorry, no tasks available"
            }
        </section>
    );
}

export default TasksView;