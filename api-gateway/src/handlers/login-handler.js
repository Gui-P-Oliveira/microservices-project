const axios = require('axios')

class LoginService {
  static async login(req, res) {
    try {
      const { data } = await axios.post(
        `${process.env.LOGIN_SERVICE_URL}/login`,
        req.body
      )

      return res.json(data)
    } catch (error) {
      res
        .status(error?.response?.status || 500)
        .json({ error: error?.response?.data?.error || 'Server error' })
    }
  }
}

module.exports = LoginService
