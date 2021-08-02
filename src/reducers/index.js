import { combineReducers } from "redux";
import tasksReducer from "./tasks";

const Reducers = combineReducers({
    tasks: tasksReducer
});

export default Reducers;