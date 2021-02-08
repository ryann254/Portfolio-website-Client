import {ADD_EVENTS, UPDATE_COUNT, VIEW_EVENT} from '../action-types'

export const AddEvents = (data) => {
    return {type: ADD_EVENTS, payload: data}
}

export const UpdateEvent = () => {
    return {type: UPDATE_COUNT}
}

export const ViewEvent = (data) => {
    return {type: VIEW_EVENT, payload: data}
}

