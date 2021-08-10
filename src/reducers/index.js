import { combineReducers } from "redux";
import goalsReducer from "./goals";
import userReducer from "./users";

const Reducers = combineReducers({
    goals: goalsReducer,
    user: userReducer
});

export default Reducers;