const yup = require('yup')
const { RecoveryPasswordService, EnqueueService } = require('../services')

class RecoveryPasswordController {
  static async passwordChange(req, res) {
    try {
      const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required()
      })

      if (!(await schema.isValid(req.body))) {
        throw { status: 400, message: 'Request fails' }
      }

      await RecoveryPasswordService.savePasswordChangeRequest(req.body.email)
      await EnqueueService.enqueue(req.body)

      res.json({ message: 'Request Accepted' })
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: error.message || 'Server Error' })
    }
  }
}

module.exports = RecoveryPasswordController
