import axios from "axios";

const initialState = [];

const taskReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        default:
            return initialState;
    };
}

export default monthReducer;