// User Actions
// ======================================
export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const REFRESH = "REFRESH";
export const LOGOUT = "LOGOUT";

export const registerUser = (userData, isAuth) => ({ type: REGISTER, payload: { ...userData, isAuth } });
export const loginUser = (userData, isAuth) => ({ type: LOGIN, payload: { ...userData, isAuth } });
export const refreshUser = (userData, isAuth) => ({ type: REFRESH, payload: { ...userData, isAuth } });
export const logoutUser = () => ({ type: LOGOUT, payload: {} });

// Goals Actions
// ======================================
const SET_GOALS = "SET_GOALS";
const CREATE_GOAL = "CREATE_GOAL";
const UPDATE_GOAL = "UPDATE_GOAL";
const DELETE_GOAL = "DELETE_GOAL";

export const setGoals = (goals) => ({ type: SET_GOALS, payload: goals });
export const createGoal = (goal) => ({ type: CREATE_GOAL, payload: goal });
export const updateGoal = (id) => ({ type: UPDATE_GOAL, payload: id });
export const deleteGoal = (id) => ({ type: DELETE_GOAL, payload: id });