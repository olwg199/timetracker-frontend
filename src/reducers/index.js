import { combineReducers } from "redux";
import goalsReducer from "./goals-reducer";
import userReducer from "./user-reducer";

const Reducers = combineReducers({
    goals: goalsReducer,
    user: userReducer
});

export default Reducers;