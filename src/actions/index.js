export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const REFRESH = "REFRESH";
export const LOGOUT = "LOGOUT";

export const registerUser = (user) => ({ type: REGISTER, payload: user });
export const loginUser = (userData, isAuth) => ({ type: LOGIN, payload: { ...userData, isAuth } });
export const refreshUser = (userData, isAuth) => ({ type: REFRESH, payload: { ...userData, isAuth } });
export const logoutUser = () => ({ type: LOGOUT, payload: {} });