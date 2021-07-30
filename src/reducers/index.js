import { combineReducers } from "redux";
import taskReducer from "./task";

const Reducers = combineReducers({
    task: taskReducer
});

export default Reducers;