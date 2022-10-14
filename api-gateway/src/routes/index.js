const { Router } = require('express')
const {
  LoginService,
  ChuckNorrisJokeService,
  RecoveryPasswordService,
  ChangePasswordService
} = require('../handlers')
const authenticationMiddleware = require('../middlewares/authentication')

const routes = new Router()

routes.post('/login', LoginService.login)

routes.post('/recovery-password', RecoveryPasswordService.recoveryPassword)

routes.post('/change-password', ChangePasswordService.changePassword)

routes.use(authenticationMiddleware)

routes.get('/chucknorris', ChuckNorrisJokeService.joke)

module.exports = routes
