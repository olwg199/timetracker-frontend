import { loginUser, logoutUser, refreshUser, registerUser } from "./index";
import AuthService from "../services/AuthService"

export const login = (username, password) => {
    return async (dispatch) => {
        try {
            const response = await AuthService.login(username, password);
            localStorage.setItem("token", response.data.accessToken);
            console.log(response);
            dispatch(loginUser(response.data, true));
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    };
};

export const register = (username, password, email) => {
    return async (dispatch) => {
        try {
            const response = await AuthService.register(username, password, email);
            localStorage.setItem("token", response.data.accessToken);
            console.log(response);
            dispatch(registerUser(response.data, true));
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        try {
            await AuthService.logout();
            localStorage.removeItem("token");
            dispatch(logoutUser());
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    };
};

export const refresh = () => {
    return async (dispatch) => {
        try {
            const { data } = await AuthService.refresh();
            localStorage.setItem("token", data.accessToken);
            dispatch(refreshUser(data, true));
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    };
};