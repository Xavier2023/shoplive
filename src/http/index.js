import { AUTH_TOKEN } from "./auth"

const { default: axios } = require("axios")

export const setupHttp = () => {
    const authToken = localStorage.getItem(AUTH_TOKEN)

    axios.defaults.baseURL = 'https://listicle.deegeehub.com/api'
    axios.defaults.headers.Authorization = authToken
}