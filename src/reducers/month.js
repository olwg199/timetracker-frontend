const initialState = {
    name: "January",
    firstWeekday: "friday",
    amountOfDays: 31,
    d1: {
        isAchived: false,
        goalsAmount: 3
    },
    d2: {
        isAchived: true,
        goalsAmount: 2
    }
}

const monthReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        default:
            return initialState;
    };
}

export default monthReducer;