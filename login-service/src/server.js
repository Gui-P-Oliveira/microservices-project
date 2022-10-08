const express = require('express')
const routes = require('./routes')
require('dotenv').config()

const PORT = process.env.PORT

const server = express()
server.use(express.json())
server.use(routes)

server.listen(PORT, () => console.log(`Login-Service server is listening on PORT:${PORT}`))
