const jwt = require('jsonwebtoken')
const { Unauthorized } = require('http-errors')
const { User } = require('../db/userModel')

const authorization = async (req, res, next) => {
  try {
    const auth = req.get('authorization')
    if (!auth) {
      throw new Unauthorized('no token')
    }

    const [bearer, token] = auth.split(' ')
    if (bearer !== 'Bearer') throw new Unauthorized('not auhtorized')
    const user = jwt.decode(token, process.env.SECRET_KEY)
    if (!user) {
      throw new Unauthorized('not auhtorized')
    }

    const currentUser = await User.findById(user.id)
    if (currentUser.token !== token) {
      throw new Unauthorized('not auhtorized')
    }

    req.user = user
    req.token = token
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = { authorization }
