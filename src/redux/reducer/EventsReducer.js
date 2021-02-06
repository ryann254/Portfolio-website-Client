import {ADD_EVENTS, UPDATE_COUNT, VIEW_EVENT} from '../action-types'

const initialState = {
   events: [],
   updateCount: 0,
   viewEvent: ''
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

        case VIEW_EVENT:
            return {
                ...state,
                viewEvent: action.payload,
            }
    
        default:
            return state;
    }
}

export default EventsReducer;