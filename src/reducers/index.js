import { combineReducers } from "redux";
import yearReducer from "./year";

const Reducers = combineReducers({
    year: yearReducer
});

export default Reducers;