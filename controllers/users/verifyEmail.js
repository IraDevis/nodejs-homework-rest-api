const userOperations = require('../../model/users')

const verifyController = async (req, res, next) => {
  try {
    const user = await userOperations.verify(req.params)

    if (!user) {
      res.status(401).json({ message: 'User not found' })
      return
    }

    res.status(200).json({ message: 'Succsess!' })
  } catch (error) {
    next(error)
  }
}

const verifyAgainController = async (req, res, next) => {
  try {
    const responce = await userOperations.verifyAgain(req.body)
    res.status(200).json(responce)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  verifyController,
  verifyAgainController
}
