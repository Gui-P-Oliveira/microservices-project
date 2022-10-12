const yup = require('yup')
const { ChangePasswordModel } = require('../models')
const { RecoveryPasswordService } = require('../services')

class ChangePasswordController {
  static async passwordChange(req, res) {
    try {
      const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
        confirmPassword: yup
          .string()
          .required()
          .oneOf([yup.ref('password'), null])
      })

      if (!(await schema.isValid(req.body))) {
        throw { status: 400, message: 'Validation fails' }
      }

      await RecoveryPasswordService.verifyPasswordChangeRequest(req.body.email)

      await ChangePasswordModel.changeUserPassword(
        req.body.email,
        req.body.password
      )

      res.json({ message: 'Password Changed!' })
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: error.message || 'Server Error' })
    }
  }
}

module.exports = ChangePasswordController
