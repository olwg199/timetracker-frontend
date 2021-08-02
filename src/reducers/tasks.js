const SET_TASKS = "SET_TASKS";
const initialState = [];

export default function tasksReducer(state = initialState, action) {
    const { type } = action;
    switch (type) {
        case (SET_TASKS): {
            return action.payload;
        }
        default: {
            return initialState;
        }
    };
}

export const setTasks = (tasks) => ({ type: SET_TASKS, payload: tasks });