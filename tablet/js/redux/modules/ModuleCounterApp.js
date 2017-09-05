// ** Pepper Session
import PepperSession from "../../libs/PepperSession";

// *************************
// ** Action Types
// *************************
const actionCategory = 'counter';
const actionTypes = {
    INCREMENT: actionCategory + '/INCREMENT',
    DECREMENT: actionCategory + '/DECREMENT'
};

// *************************
// ** Action Creators
// *************************
export function incrementNumber(value){
    return {
        type: actionTypes.INCREMENT,
        value
    }
}
export function incrementNumberAsync(value) {
    return (dispatch, getState) => {
        setTimeout( () => {
            dispatch(incrementNumber(value));

            PepperSession.sendLog2PepperObject( ["メッセージ","送るよ"] );
        }, 1000);
    };
}

export function decrementNumber(value){
    return {
        type: actionTypes.DECREMENT,
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
        case actionTypes.INCREMENT:
            return Object.assign(
                {},
                state,
                {
                    value: state.value + action.value
                }
            );
        case actionTypes.DECREMENT:
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