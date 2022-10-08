const { Router } = require('express')
const { SessionController } = require('../controllers')

const routes = new Router()

routes.post('/login', SessionController.login)

module.exports = routes
