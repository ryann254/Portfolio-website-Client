import axios from 'axios'
import store from '../redux/store'

//Own components
import notify from '../helpers/Notify'
import {UpdateAuth, AddUser} from '../redux/action-creator/AuthActionCreator'


export const API_URL = 'http://localhost:3000/v1/'
export const PROD_URL = 'https://portfolio-backend-application.herokuapp.com/v1'

const getToken = () => {
    return localStorage.getItem('jwtToken')
}


const getRefreshToken = () => {
    return localStorage.getItem('refreshToken')
}

export const CatchError = () => {
    store.dispatch(UpdateAuth(false))
    clearPreviousTokens()
    //If the refresh token does not work tell the user to login again
    notify('error', 'Kindly login again your email or password was incorrect')
}

export const DispatchUserDetails = (res) => {
    store.dispatch(AddUser(res.data))
}

const clearPreviousTokens = () => {
    //Remove the old tokens
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('refreshToken')
    return null
}

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_ENV === 'PRODUCTION' ? PROD_URL : API_URL,
    timeout: 11000,
    headers: {
        Authorization: `Bearer ${getToken()}`
    },
})


//Intercepting errors and sending the refresh tokens to re-authenticate
axiosInstance.interceptors.response.use(
    (response) => new Promise((resolve, reject) => {
        resolve(response)
    }),
    (error) => {
        //If the error is not from the server, send it to the client
        if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error)
            })
        }

        //If the error is has a response status of 401
        if (error.response.status === 401 && error.config) {
            //Send the refresh token to get a new token
            const data = {refreshToken: getRefreshToken()}
            if (data.refreshToken !== null) {
                axiosInstance.post(`auth/refresh-tokens/`, data)
                .then(res => {
                    if (res.status === 200) {
                        clearPreviousTokens()
                        //Add the new ones
                        localStorage.setItem('jwtToken', res.data.access.token)
                        localStorage.setItem('refreshToken', res.data.refresh.token)

                        //Use the new access token to resend the request that got a 401 response status
                        //Get the original request details
                        const originalReq = error.config;

                        originalReq.headers['Authorization'] = `Bearer ${res.data.access.token}`
                        axios(originalReq).then(res => DispatchUserDetails(res))
                        .catch(error => CatchError())
                    }
            })
            .catch(error => CatchError())
            } else {
                //Otherwise return errors with other reponse status codes to the client
                return new Promise((resolve, reject) => {
                    reject(error)
                })
            }
            
        } else {
            //Otherwise return errors with other reponse status codes to the client
            return new Promise((resolve, reject) => {
                reject(error)
            })
        }
    })

class Api {
    constructor() {
        this.instance = axiosInstance 
    }

    getUrl() {
        const queryString = window.location.search
        let substring = queryString.slice(7,)
        return substring
    }

    auth() {
        return {
            login: (data) => this.instance.post(`auth/login/`, data),
            logout: (data) => this.instance.post(`auth/logout/`, data),
            registerUser: (data) => this.instance.post(`auth/register/`, data),
            forgotPassword: (data) => this.instance.post(`auth/forgot-password/`, data),
            resetPassword: (data) => this.instance({
                method: 'POST',
                url: 'auth/reset-password/',
                params: {
                    token: `${this.getUrl()}`
                },
                data,
            })
        }
    }

    Users() {
        return {
            getUser: (id) => this.instance.get(`users/${id}`),
        }
    }

    Events() {
        return {
            createEvent: (data) => this.instance.post(`events/`, data),
            getAllEvents: () => this.instance.get(`events/`),
            updateEvent: (id, data) => this.instance.patch(`events/${id}`, data),
            deleteEvent: (id) => this.instance.delete(`events/${id}`),
        }
    }

    News() {
        return {
            createNewsArtilce: (data) => this.instance.post(`news/`, data),
            getAllNewsArtilces: () => this.instance.get(`news/`),
            updateNewsArtilce: (id, data) => this.instance.patch(`news/${id}`, data),
            deleteNewsArtilce: (id) => this.instance.delete(`news/${id}`),
        }
    }

    Jobs() {
        return {
            createJob: (data) => this.instance.post(`jobs/`, data),
            getAllJobs: () => this.instance.get(`jobs/`),
            updateJob: (id, data) => this.instance.patch(`jobs/${id}`, data),
            deleteJob: (id) => this.instance.delete(`jobs/${id}`),
        }
    }

    Stripe() {
        return {
            makePayment: (data) => this.instance.post(`stripe/`, data)
        }
    }
}

export default Api;