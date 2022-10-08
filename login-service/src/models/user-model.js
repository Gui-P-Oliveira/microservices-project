const userDb = require('../mocks/user-db.json')

class UserModel {
  static async getUserByEmail(email) {
    return userDb.find(user => user.email === email)
  }

  static checkPassword(userPassword, password) {
    return userPassword === password
  }
}

module.exports = UserModel
