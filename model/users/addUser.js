const { User } = require('../../db/userModel')
const bcrypt = require('bcrypt')

const addUser = async ({ password, email }) => {
  const isExistUser = await User.findOne({ email })
  if (isExistUser) {
    return null
  }

  const newUser = await new User({
    password: await bcrypt.hash(password, 10),
    email,
  })

  await newUser.save()
  return newUser
}

module.exports = {
  addUser
}
