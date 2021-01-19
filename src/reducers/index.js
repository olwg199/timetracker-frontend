import { combineReducers } from "redux";
import yearReducer from "./year";
import monthReducer from "./month";
import currentViewReducer from "./currentView";

const Reducers = combineReducers({
    year: yearReducer,
    month: monthReducer,
    currentView: currentViewReducer
});

export default Reducers;