require('dotenv').config()
const express = require('express')
const routes = require('./routes')

const PORT = process.env.PORT

const server = express()
server.use(express.json())
server.use(routes)

server.listen(PORT, () => console.log(`API-Gateway server is listening on PORT:${PORT}`))
