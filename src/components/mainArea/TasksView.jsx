import React, { useEffect } from "react";
import TaskView from "../general/TaskView";
import { useSelector, useDispatch } from "react-redux";
import { getTasks, removeTask } from "../../actions/taskActions";

function TasksView(props) {
    const dispatch = useDispatch();
    const taskList = useSelector(state => state.tasks);

    useEffect(() => {
        dispatch(getTasks());
    }, [taskList.length, dispatch]);

    return (
        <section className="task-list">
            {taskList ?
                taskList.map((task) => <TaskView task={task} key={task._id} deleteTask={() => { dispatch(removeTask(task._id)) }} />)
                :
                "Sorry, no tasks available"
            }
        </section>
    );
}

export default TasksView;