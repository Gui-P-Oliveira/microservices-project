const jwt = require('jsonwebtoken')

const SECRET_KEY = process.env.SECRET_KEY

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Missing token' })
  }

  const [, token] = authHeader.split(' ')

  try {
    jwt.verify(token, SECRET_KEY)

    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
}
