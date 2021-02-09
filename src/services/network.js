import axios from 'axios'
import axiosRetry from 'axios-retry'

export const API_URL = 'http://localhost:3000/v1/'
export const PROD_URL = 'https://portfolio-backend-application.herokuapp.com/v1'

axiosRetry(axios, {
    retries: 2,
    shouldResetTimeout: true,
    retryCondition: (_error) => true
})

class Api {
    constructor() {
        this.instance =  axios.create({
            baseURL: process.env.REACT_APP_ENV === 'PRODUCTION' ? PROD_URL : API_URL,
            timeout: 9000,
            headers: {
                Authorization: `Bearer ${this.getToken()}`
            },
        })
    }

    getToken() {
        return localStorage.getItem('jwtToken')
    }

    getRefreshToken() {
        return localStorage.getItem('refreshToken')
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
}

export default Api;