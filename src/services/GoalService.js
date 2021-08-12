import api from "../http/index";

class GoalService {
    async getGoals(username, password) {
        return api.get(`/goals`);
    };

    async createGoal(goal) {
        return api.post(`/goals/`, { ...goal });
    };

    async updateGoal(goal) {
        return api.patch(`/goals/${goal.id}`, { ...goal });
    };

    async deleteGoal(id) {
        return api.delete(`/goals/${id}`);
    };
}

export default new GoalService();