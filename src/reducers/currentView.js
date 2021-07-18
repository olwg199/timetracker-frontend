let initialState = "year";

const currentViewReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case "SET_CURRENT_VIEW": {
            state = action.payload.toLowerCase();
            saveCurrentViewToLocalStorage(state);
            return state;
        }
        default:{
            initialState = loadCurrentViewFromLocalStorage();
            
            return initialState;
        }
    };
}

function saveCurrentViewToLocalStorage(currentView){
    try {
        const serializedState = JSON.stringify(currentView);
        localStorage.setItem("currentView", serializedState);
    } catch(e) {
        console.log(e);
    }
}

function loadCurrentViewFromLocalStorage(){
    try {
         const serializedState = localStorage.getItem("currentView");
         if(serializedState === null ) return initialState;
         return JSON.parse(serializedState);
    } catch(e) {
        console.log(e);
        return initialState;
    }
}

export default currentViewReducer;