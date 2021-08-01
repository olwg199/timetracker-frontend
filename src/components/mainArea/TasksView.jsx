import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskView from "../general/TaskView";

function TasksView(props) {
    const basicURL = "https://timetracker-api-node.herokuapp.com/tasks/";
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        axios.get(basicURL)
            .then((result) => {
                setTaskList(result.data.tasks);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])


    function deleteTask(id) {
        axios.delete(basicURL + id)
            .then(result => alert("Task was deleted succesefully"))
            .catch(err => console.log("delete:", err));
    }

    return (
        <section className="task-list">
            {taskList ?
                taskList.map((task) => <TaskView task={task} key={task._id} deleteTask={() => { deleteTask(task._id) }} />)
                :
                "Sorry, no tasks available"
            }
        </section>
    );
}

export default TasksView;