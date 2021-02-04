import axios from 'axios'

export const API_URL = 'http://localhost:3000/v1/'

class Api {
    constructor() {
        this.instance =  axios.create({
            baseURL: API_URL,
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
            getTask: (id) => this.instance.get(`tasks/${id}`),
            updateEvent: (id, data) => this.instance.patch(`events/${id}`, data),
            deleteEvent: (id) => this.instance.delete(`events/${id}`),
            getUsersTasks: (id) => this.instance.get(`users/tasks/${id}`),
            assignUserTask: (id, data) => this.instance.post(`users/${id}`, data)
        }
    }
}

export default Api;