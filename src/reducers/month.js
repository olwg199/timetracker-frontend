const initialState = {
    name: "january",
    firstWeekday: "",
    amountOfDays: 31,
    1: {
        isAchived: false,
        goalsAmount: 3
    },
    2: {
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