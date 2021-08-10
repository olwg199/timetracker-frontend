import api, { API_URL } from "../http/index";
import axios from "axios";

class AuthService {
    async login(username, password) {
        return api.post(`/user/login`, { username, password });
    };

    async register(username, password, email) {
        return api.post(`/user/signup`, { username, password, email });
    };

    async logout() {
        return api.post(`/user/logout`);
    };

    async refresh() {
        return axios.get(`${API_URL}user/refresh`, { withCredentials: true });
    };
}

export default new AuthService();