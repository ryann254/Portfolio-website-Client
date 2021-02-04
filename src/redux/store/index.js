import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import AuthReducer from '../reducer/AuthReducer'
import EventsReducer from '../reducer/EventsReducer'

const store = createStore(
    combineReducers({
        auth: AuthReducer,
        events: EventsReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;