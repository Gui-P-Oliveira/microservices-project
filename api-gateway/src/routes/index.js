const { Router } = require('express')
const { LoginService } = require('../handlers')
const authenticationMiddleware = require('../middlewares/authentication')

const routes = new Router()

routes.post('/login', LoginService.login)

routes.use(authenticationMiddleware)

module.exports = routes
