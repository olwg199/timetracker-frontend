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
export const SET_GOALS = "SET_GOALS";
export const ADD_GOAL = "ADD_GOAL";
export const CHANGE_GOAL = "CHANGE_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";
export const SET_GOALS_LOADING = "SET_GOALS_LOADING";

export const setGoals = (goals) => ({ type: SET_GOALS, payload: goals });
export const addGoal = (goal) => ({ type: ADD_GOAL, payload: goal });
export const changeGoal = (goal) => ({ type: CHANGE_GOAL, payload: goal });
export const removeGoal = (id) => ({ type: REMOVE_GOAL, payload: id });
export const setGoalsLoading = (isLoading) => ({ type: SET_GOALS_LOADING, payload: isLoading });
