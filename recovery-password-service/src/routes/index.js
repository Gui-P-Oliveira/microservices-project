const { Router } = require('express')
const { RecoveryPasswordController, ChangePasswordController } = require('../controllers')

const routes = new Router()

routes.post('/recovery-password', RecoveryPasswordController.passwordChange)

routes.post('/change-password', ChangePasswordController.passwordChange)

module.exports = routes
