const { ChuckNorrisModel } = require('../models')

class ChuckNorrisController {
    static async getRandomJoke(req, res){
        try {
            const randomJoke = await ChuckNorrisModel.getRandonJokes()

            return res.json({ joke: randomJoke })
        } catch (error) {
            res.status(error.status || 500).json({ error: error.message || 'Server error' })
        }
    }
}

module.exports = ChuckNorrisController