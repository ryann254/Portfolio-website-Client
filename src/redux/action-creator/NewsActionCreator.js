import {ADD_NEWS, VIEW_NEWS} from '../action-types'

export const AddNews = (data) => {
    return {type: ADD_NEWS, payload: data}
}

export const ViewNews = (data) => {
    return {type: VIEW_NEWS, payload: data}
}

