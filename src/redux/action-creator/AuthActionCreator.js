import {ADD_USER, UPDATE_AUTH} from '../action-types'

export const AddUser = (data) => {
    return {type: ADD_USER, payload: data}
}

export const UpdateAuth = (data) => {
    return {type: UPDATE_AUTH, payload: data}
}