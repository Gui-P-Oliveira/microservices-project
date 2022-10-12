const yup = require('yup')
const jwt = require('jsonwebtoken')
const { UserModel } = require('../models')

class SessionController {
  static async login(req, res) {
    try {
      const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
      })

      if (!(await schema.isValid(req.body))) {
        throw { status: 400, message: 'Validation fails' }
      }

      const user = await UserModel.getUserByEmail(req.body.email)

      if (!user || !UserModel.checkPassword(user.password, req.body.password)) {
        throw { status: 401, message: 'E-mail or password invalid' }
      }

      const token = jwt.sign(
        { UserEmail: user.email },
        process.env.SECRET_KEY,
        {
          expiresIn: '1h'
        }
      )

      res.json({ token })
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: error.message || 'Server Error' })
    }
  }
}

module.exports = SessionController
