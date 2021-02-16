import notify from './Notify'

const catchFn = (err) => {
    if (err.response) {
        const {message} = err.response.data
        notify('error', message)
    } else {
        notify('error', 'Something went wrong, Please refresh the page.')
    }
}

export default catchFn;