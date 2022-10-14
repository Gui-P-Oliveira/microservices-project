const userDb = require('../../../db/user-db.json')
const fs = require('fs')
const path = require('path')

const dbPath = path.join(__dirname, '../', '../', '../', 'db', 'user-db.json')

class ChangePasswordModel {
  static async changeUserPassword(userEmail, userPassword) {
    const userIndex = userDb.findIndex(user => user.email === userEmail)
    
    if (userIndex < 0) {
      throw { status: 400, message: 'User not found' }
    }

    userDb[userIndex].password = userPassword

    fs.writeFile(dbPath, JSON.stringify(userDb), err => {
      if (err) console.log(err)
    })

  }
}

module.exports = ChangePasswordModel
