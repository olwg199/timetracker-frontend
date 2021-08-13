import { SET_GOALS, ADD_GOAL, CHANGE_GOAL, REMOVE_GOAL, SET_GOALS_LOADING } from "actions";
const initialState = {isLoading: false, list: []};

export default function goalsReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case (SET_GOALS): {
            return { ...state, list: [...payload] };
        }
        case (ADD_GOAL): {
            return {...state, list: [...state.list, {...payload}]};
        }
        case (CHANGE_GOAL): {
            const updateGoals = state.list.map((goal)=>{
                if(goal.id !== payload.id){
                    return goal;
                }
                return {...payload};
            })
            return {...state, list: updateGoals};
        }
        case (REMOVE_GOAL): {
            const newGoals = state.list.filter((goal)=> (goal.id !== payload));
            return {...state, list: newGoals};
        }
        case (SET_GOALS_LOADING): {
            return {...state, isLoading: payload};
        }
        default: {
            return initialState;
        }
    };
}