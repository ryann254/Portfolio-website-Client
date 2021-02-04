import {ADD_EVENTS, UPDATE_COUNT} from '../action-types'

export const AddEvents = (data) => {
    return {type: ADD_EVENTS, payload: data}
}

export const UpdateEvent = () => {
    return {type: UPDATE_COUNT}
}