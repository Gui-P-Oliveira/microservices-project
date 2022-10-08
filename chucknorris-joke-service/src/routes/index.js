const { Router } = require('express')
const { ChuckNorrisController } = require('../controllers')

const routes = new Router()

routes.get('/jokes', ChuckNorrisController.getRandomJoke)

module.exports = routes