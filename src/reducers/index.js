import { combineReducers } from "redux";
import goalsReducer from "./goals";

const Reducers = combineReducers({
    goals: goalsReducer
});

export default Reducers;