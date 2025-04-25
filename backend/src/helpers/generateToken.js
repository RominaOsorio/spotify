const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.generateToken = async (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '24h'
  })
  return token
}
