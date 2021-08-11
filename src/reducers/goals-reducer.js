import { SET_GOALS, CREATE_GOAL, UPDATE_GOAL, DELETE_GOAL } from "actions";
const initialState = [];

export default function goalsReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case (SET_GOALS): {
            return payload;
        }
        case (CREATE_GOAL): {
            return payload;
        }
        case (UPDATE_GOAL): {
            return payload;
        }
        case (DELETE_GOAL): {
            return payload;
        }
        default: {
            return initialState;
        }
    };
}