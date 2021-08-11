import GoalService from "services/GoalService";
import { setGoals } from "../reducers/goals-reducer";

export const getGoals = () => {
    return async (dispatch) => {
        try {
            const response = await GoalService.getGoals();
            dispatch(setGoals(response.data.tasks));
        } catch (e) {
            console.log(e.response.data.errorMessage);
        }
    };
};

export const createGoal = (goal) => {
    return async (dispatch) => {
        try {
            await GoalService.createGoal(goal);
            dispatch(getGoals());
        } catch (e) {
            console.log(e.response.data.errorMessage);
        }
    };
};

export const updateGoal = (goal) => {
    return async (dispatch) => {
        try {
            await GoalService.updateGoal(goal);
            dispatch(getGoals());
        } catch (e) {
            console.log(e.response.data.errorMessage);
        }
    };
};

export const deleteGoal = (id) => {
    return async (dispatch) => {
        try {
            await GoalService.deleteGoal(id);
            dispatch(getGoals());
        } catch (e) {
            console.log(e.response.data.errorMessage);
        }
    };
};