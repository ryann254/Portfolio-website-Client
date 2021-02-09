import {ADD_JOB, VIEW_JOB} from '../action-types'

export const AddJob = (data) => {
    return {type: ADD_JOB, payload: data}
}

export const ViewJob = (data) => {
    return {type: VIEW_JOB, payload: data}
}

