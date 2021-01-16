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
        firstWeekday: "monday",
        amountOfDays: 28,
        5: {
            isAchived: true,
            goalsAmount: 4
        }
    },

    march: {
        name: "March",
        firstWeekday: "monday",
        amountOfDays: 31
    },

    april: {
        name: "April",
        firstWeekday: "thursday",
        amountOfDays: 30
    },

    may: {
        name: "May",
        firstWeekday: "saturday",
        amountOfDays: 31
    },

    june: {
        name: "June",
        firstWeekday: "tuesday",
        amountOfDays: 30
    },

    july: {
        name: "July",
        firstWeekday: "thursday",
        amountOfDays: 31
    },

    august: {
        name: "August",
        firstWeekday: "sunday",
        amountOfDays: 31,
        5: {
            isAchived: false,
            goalsAmount: 1
        }
    },

    september: {
        name: "September",
        firstWeekday: "wednesday",
        amountOfDays: 30
    },

    october: {
        name: "October",
        firstWeekday: "friday",
        amountOfDays: 31
    },

    november: {
        name: "November",
        firstWeekday: "munday",
        amountOfDays: 30
    },

    december: {
        name: "December",
        firstWeekday: "wednesday",
        amountOfDays: 31
    }
};



const yearReducer = (state = initialState, action) => {
    const { type } = action
    switch (type) {
        default:
            return initialState;
    };
};


export default yearReducer;