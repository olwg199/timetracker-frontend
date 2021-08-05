import axios from "axios";
import { setGoals } from "../reducers/goals";
const basicURL = "https://timetracker-api-node.herokuapp.com/tasks";
// const basicURL = "http://localhost:3000/tasks";

export const getGoals = () => {
    return (dispatch) => {
        axios.get(basicURL)
            .then((result) => {
                dispatch(setGoals(result.data.tasks));
            });
    };
};

export const removeGoal = (id) => {
    return (dispatch) => {
        axios.delete(`${basicURL}/${id}`)
            .then((result) => {
                dispatch(getGoals());
            })
            .catch(err => console.log("delete:", err));
    };
};

export const addGoal = (goal) => {
    return (dispatch) => {
        axios.post(`${basicURL}`, goal)
            .then((result) => {
                dispatch(getGoals());
            })
            .catch((err) => {
                console.log(err.response.data.errorMessage);
            });
    };
};

export const updateGoal = (goal) => {
    return (dispatch) => {
        axios.patch(`${basicURL}/${goal._id}`, goal)
            .then((result) => {
                dispatch(getGoals());
            })
            .catch(err => console.log("add:", err));
    };
};