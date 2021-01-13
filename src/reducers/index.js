import { combineReducers } from "redux";
import yearReducer from "./year";
import monthReducer from "./month";

const Reducers = combineReducers({
    year: yearReducer,
    month: monthReducer
});

export default Reducers;