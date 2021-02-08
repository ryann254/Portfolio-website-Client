import {ADD_NEWS, VIEW_NEWS} from '../action-types'

const initialState = {
   news: [],
   viewNews: ''
}

function NewsReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_NEWS:
            return {
                ...state,
                news: action.payload,
            }

        case VIEW_NEWS:
            return {
                ...state,
                viewNews: action.payload,
            }
    
        default:
            return state;
    }
}

export default NewsReducer;