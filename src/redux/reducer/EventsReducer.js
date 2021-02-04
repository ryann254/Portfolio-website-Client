import {ADD_EVENTS, UPDATE_COUNT} from '../action-types'

const initialState = {
   events: [],
   updateCount: 0
}

function EventsReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_EVENTS:
            return {
                ...state,
                events: action.payload,
            }
        case UPDATE_COUNT:
            return {
                ...state,
                updateCount: state.updateCount + 1,
            }
    
        default:
            return state;
    }
}

export default EventsReducer;