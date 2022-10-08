const axios = require('axios')

class ChuckNorrisJokeService {
  static async joke(req, res) {
    try {      
      const { data } = await axios.get(
        `${process.env.CHUCK_NORRIS_JOKE_SERVICE_URL}/jokes`,       
      )

      return res.json(data)
    } catch (error) {
      res
        .status(error?.response?.status || 500)
        .json({ error: error?.response?.data?.error || 'Server error' })
    }
  }
}

module.exports = ChuckNorrisJokeService