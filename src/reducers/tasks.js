const SET_TASKS = "SET_TASKS";
const DELETE_TASK = "DELETE_TASK";
const ADD_TASK = "ADD_TASK";
const initialState = [];

export default function tasksReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case (ADD_TASK): {
            return payload;
        }
        case (DELETE_TASK): {
            return payload;
        }
        case (SET_TASKS): {
            return payload;
        }
        default: {
            return initialState;
        }
    };
}

export const setTasks = (tasks) => ({ type: SET_TASKS, payload: tasks });

export const deleteTask = (id) => ({ type: DELETE_TASK, payload: id });

export const addTask = (task) => ({ type: ADD_TASK, payload: task });