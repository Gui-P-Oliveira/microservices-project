const { Router } = require('express')
const { LoginService, ChuckNorrisJokeService } = require('../handlers')
const authenticationMiddleware = require('../middlewares/authentication')

const routes = new Router()

routes.post('/login', LoginService.login)

routes.use(authenticationMiddleware)

routes.get('/chucknorris', ChuckNorrisJokeService.joke)

module.exports = routes
