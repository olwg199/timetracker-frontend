const SET_GOALS = "SET_GOALS";
const DELETE_GOAL = "DELETE_GOAL";
const ADD_GOAL = "ADD_GOAL";
const UPDATE_GOAL = "UPDATE_GOAL";
const initialState = [];

export default function goalsReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case (UPDATE_GOAL): {
            return payload;
        }
        case (ADD_GOAL): {
            return payload;
        }
        case (DELETE_GOAL): {
            return payload;
        }
        case (SET_GOALS): {
            return payload;
        }
        default: {
            return initialState;
        }
    };
}

export const setGoals = (goals) => ({ type: SET_GOALS, payload: goals });

export const deleteGoal = (id) => ({ type: DELETE_GOAL, payload: id });

export const addGoal = (goal) => ({ type: ADD_GOAL, payload: goal });

export const updateGoal = (id) => ({ type: UPDATE_GOAL, payload: id });