const { User } = require('../../db/userModel')

const getUserById = async (user) => {
  const currentUser = await User.findById(user.id)
  return currentUser
}

module.exports = { getUserById }
