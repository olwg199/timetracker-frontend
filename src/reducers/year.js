class Goal {
    goal(){
        this.description = "";
        this.startTime = "";
        this.endTime = "";
        this.timeSpent = "";
        this.isAchived = false;
    }
}

const initialState = {
    january: {
        1: [new Goal(), new Goal()],
        2: [new Goal(), new Goal()]
    }
};



const yearReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    };
};

// buildInitialState(userId, year) {

// }

export default yearReducer;