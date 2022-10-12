const axios = require('axios')

class RecoveryPasswordService {
  static async recoveryPassword(req, res) {
    try {
      const { data } = await axios.post(
        `${process.env.RECOVERY_PASSWORD_URL}/recovery-password`,
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

module.exports = RecoveryPasswordService
