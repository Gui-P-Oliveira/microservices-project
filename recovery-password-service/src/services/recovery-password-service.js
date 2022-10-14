const redisClient = require('../config/redis')
redisClient.connect()

class RecoveryPasswordService {
  static async savePasswordChangeRequest(email) {
    const expirationTime = 60 * 3
    const userRedis = JSON.parse(await redisClient.get(`USER_${email}`))

    if (!userRedis) {
      await redisClient.set(
        `USER_${email}`,
        JSON.stringify({
          passwordChangeRequest: true
        }),
        {
          EX: expirationTime
        }
      )
    }
  }

  static async verifyPasswordChangeRequest(email) {
    const checkRequestIsExpired = await redisClient.get(`USER_${email}`)

    if(!checkRequestIsExpired) {
      throw { status: 400, message: 'Link to change password expired' }
    }
  }
}

module.exports = RecoveryPasswordService
