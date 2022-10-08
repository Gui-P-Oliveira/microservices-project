const { api } = require('../config/api')

class ChuckNorrisModel {
    static async  getRandonJokes() {
        const { data } =  await api.get('/random')
        return data.value
    }
}

module.exports = ChuckNorrisModel