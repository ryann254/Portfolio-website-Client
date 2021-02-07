import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import AuthReducer from '../reducer/AuthReducer'
import EventsReducer from '../reducer/EventsReducer'
import NewsReducer from '../reducer/NewsReducer'
import JobsReducer from '../reducer/JobsReducer'

const store = createStore(
    combineReducers({
        auth: AuthReducer,
        events: EventsReducer,
        news: NewsReducer,
        jobs: JobsReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;