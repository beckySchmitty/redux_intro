const INITIAL_STATE = { mood: "MOOD"};

const moodReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'HAPPY': 
        return {...state, mood: ":)"}
        case 'SAD': 
            return {...state, mood: ":("}
        case 'ANGRY': 
        // can also use this method
            return {...state, mood: action.payload}
        case 'RESET': 
            return {...state, mood: "MOOD"}
        default:
            return state
    
    }
}

const store = Redux.createStore(moodReducer)