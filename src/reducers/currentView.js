const initialState = "year";

const currentViewReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case "SET_CURRENT_VIEW": {
            state = action.payload.toLowerCase();
            return state;
        }
        default:
            return initialState;
    };
}

export default currentViewReducer;