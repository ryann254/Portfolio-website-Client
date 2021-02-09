import {ADD_USER, UPDATE_AUTH} from '../action-types'

const initialState = {
   auth: false,
   user: ''
}

function AuthReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                user: action.payload,
                auth: true
            }
        case UPDATE_AUTH:
            return {
                ...state,
                auth: action.payload
            }
    
        default:
            return state;
    }
}

export default AuthReducer;