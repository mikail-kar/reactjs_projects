import * as actionTypes from '../actions/actionTypes'


const counterReducers = (state = 0, action) => {
    let newState;
    switch(action.type){
        case actionTypes.INCREASE_COUNTER:
            return (newState = state + action.payload)
        case actionTypes.DECREASE_COUNTER:
            return (newState = state - action.payload)
        case actionTypes.INCREASE_BY_TWO_COUNTER:
            return (newState = state + action.payload)
        case actionTypes.MULTIPLY_WITH_INPUT:
            return (newState = state * action.payload)
        default:
            return state
    }
}
export default counterReducers;