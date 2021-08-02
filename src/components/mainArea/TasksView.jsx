import React, { useEffect } from "react";
import axios from "axios";
import TaskView from "../general/TaskView";
import { useSelector, useDispatch } from "react-redux";
import { getTasks } from "../../actions/taskActions";

function TasksView(props) {
    const basicURL = "https://timetracker-api-node.herokuapp.com/tasks/";
    const dispatch = useDispatch();
    const taskList = useSelector(state => state.tasks);

    useEffect(() => {
        dispatch(getTasks());
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