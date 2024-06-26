import { AUTH_TOKEN } from "./auth"

const { default: axios } = require("axios")

export const BASE_URL = 'https://listicle.deegeehub.com/api'

export const setupHttp = () => {
    const authToken = localStorage.getItem(AUTH_TOKEN)

    axios.defaults.baseURL = BASE_URL
    axios.defaults.headers.Authorization = authToken;
}