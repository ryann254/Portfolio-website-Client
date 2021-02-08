import {ADD_JOB, VIEW_JOB} from '../action-types'

const initialState = {
   jobs: [],
   viewJob: ''
}

function JobsReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_JOB:
            return {
                ...state,
                jobs: action.payload,
            }

        case VIEW_JOB:
            return {
                ...state,
                viewJob: action.payload,
            }
    
        default:
            return state;
    }
}

export default JobsReducer;