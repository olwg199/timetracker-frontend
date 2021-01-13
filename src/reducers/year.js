const initialState = {
    january: {
        name: "January",
        firstWeekday: "friday",
        amountOfDays: 31,
        1: {
            isAchived: false,
            goalsAmount: 3
        },
        2: {
            isAchived: true,
            goalsAmount: 2
        }
    },
    february: {
        name: "February",
        5: {
            isAchived: true,
            goalsAmount: 4
        }
    },
    march: {},
    april: {},
    may: {},
    june: {},
    july: {},
    august: {
        name: "August",
        5: {
            isAchived: false,
            goalsAmount: 1
        }
    },
    september: {},
    october: {},
    november: {},
    december: {}
};



const yearReducer = (state = initialState, action) => {
    const { type } = action
    switch (type) {
        default:
            return initialState;
    };
};


export default yearReducer;