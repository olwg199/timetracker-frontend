import axios from "axios";
import { setTasks } from "../reducers/tasks";
const basicURL = "https://timetracker-api-node.herokuapp.com/tasks";

export const getTasks = () => {
    return (dispatch) => {
        axios.get(basicURL)
            .then((result) => {
                dispatch(setTasks(result.data.tasks));
            });
    };
};

export const removeTask = (id) => {
    return (dispatch) => {
        axios.delete(`${basicURL}/${id}`)
            .then((result) => {
                dispatch(getTasks());
            })
            .catch(err => console.log("delete:", err));
    };
};

export const addTask = (task) => {
    return (dispatch) => {
        axios.post(`${basicURL}`, task)
            .then((result) => {
                dispatch(getTasks());
            })
            .catch(err => console.log("add:", err));
    };
};