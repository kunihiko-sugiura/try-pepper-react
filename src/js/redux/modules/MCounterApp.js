// *************************
// ** Action Types
// *************************
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// *************************
// ** Action Creators
// *************************
export function incrementNumber(value){
    return {
        type: INCREMENT,
        value
    }
}
export function decrementNumber(value){
    return {
        type: DECREMENT,
        value
    }
}

// *************************
// ** Initial State
// *************************
const initialState = {
    value: 0
};

// *************************
// ** Reducer
// *************************
export default function reducer(state = initialState, action){
    switch (action.type){
        case INCREMENT:
            return Object.assign(
                {},
                state,
                {
                    value: state.value + action.value
                }
            );
        case DECREMENT:
            return Object.assign(
                {},
                state,
                {
                    value: state.value + action.value
                }
            );
        default:
            return state;
    }
}