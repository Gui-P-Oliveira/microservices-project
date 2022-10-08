const axios = require('axios')

module.exports = {
    api: axios.create({
        baseURL: process.env.CHUCKNORRIS_API_URL
    })
} 