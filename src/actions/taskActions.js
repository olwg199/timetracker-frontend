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