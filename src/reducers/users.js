import { LOGIN, LOGOUT, REFRESH, REGISTER } from "../actions"


const initialState = {
    user: {},
    accessToken: "",
    refreshToken: "",
    isAuth: false
};

export default function userReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case (REFRESH): {
            return { ...payload };
        }
        case (LOGIN): {
            return { ...payload };
        }
        case (REGISTER): {
            return { ...state };
        }
        case (LOGOUT): {
            return { ...initialState };
        }
        default: {
            return { ...state };
        }
    };
}

