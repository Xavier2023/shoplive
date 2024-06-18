const axios = require('axios')

export const AUTH_TOKEN = 'auth_token'

export const register = async ({ name, email, password,}) => {
    return axios.post('/user/register', {
        fullName: name,
        email: email,
        password,
        confirmPassword: password
    })
}

export const login = async ({ email, password }) => {
    return axios.post('/user/login', {
        email,
        password
    })
}