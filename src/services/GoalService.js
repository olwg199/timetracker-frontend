import api from "../http/index";

class GoalService {
    async getGoals(username, password) {
        return api.get(`/tasks`);
    };

    async createGoal(goal) {
        return api.post(`/tasks/`, { ...goal });
    };

    async updateGoal(goal) {
        return api.patch(`/tasks/${goal._id}`, { ...goal });
    };

    async deleteGoal(id) {
        return api.delete(`/tasks/${id}`);
    };
}

export default new GoalService();