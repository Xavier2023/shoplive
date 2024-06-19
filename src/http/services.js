const axios = require('axios')

export const getServices = () => {
    return axios.get('/services')
}