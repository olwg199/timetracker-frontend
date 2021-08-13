import GoalService from "services/GoalService";
import { addGoal, changeGoal, setGoals, setGoalsLoading, removeGoal } from "actions";

export const fetchGoals = () => {
    return async (dispatch) => {
        try {
            dispatch(setGoalsLoading(true));
            const response = await GoalService.getGoals();
            const goalsList = response.data.goals.map((item)=> item.goal);
            dispatch(setGoals(goalsList));
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            dispatch(setGoalsLoading(false));
        }
    };
};

export const createGoal = (goal) => {
    return async (dispatch) => {
        try {
            dispatch(setGoalsLoading(true));
            const response = await GoalService.createGoal(goal);
            dispatch(addGoal(response.data.createdGoal));
        } catch (e) {
            console.log(e);
            console.log(e.response?.data?.message);
        } finally {
            dispatch(setGoalsLoading(false));
        }
    };
};

export const updateGoal = (goal) => {
    return async (dispatch) => {
        try {
            dispatch(setGoalsLoading(true));
            await GoalService.updateGoal(goal);
            dispatch(changeGoal(goal));
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            dispatch(setGoalsLoading(false));
        }
    };
};

export const deleteGoal = (id) => {
    return async (dispatch) => {
        try {
            dispatch(setGoalsLoading(true));
            await GoalService.deleteGoal(id);
            dispatch(removeGoal(id));
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            dispatch(setGoalsLoading(false));
        }
    };
};