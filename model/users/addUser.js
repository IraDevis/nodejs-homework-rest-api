const { User } = require('../../db/userModel');
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const { nanoid } = require('nanoid');
const sgMail = require('@sendgrid/mail');

const addUser = async ({ password, email }) => {
  const isExistUser = await User.findOne({ email })
  if (isExistUser) {
    return null
  }

  const verifyToken = nanoid()

  const newUser = await new User({
    password: await bcrypt.hash(password, 10),
    email,
    avatarURL: gravatar.url(email, null, false),
    verifyToken,
  })

  await newUser.save()

  const mail = {
    to: email,
    from: 'iradevis@gmail.com',
    subject: 'Welcome!',
    text: `Dear User! Let's verify your email. <a target="_blank" href="http://localhost:3000/api/users/verify/${verifyToken}">Click this link</a>`,
    html: `Dear User! Let's verify your email. <a target="_blank" href="http://localhost:3000/api/users/verify/${verifyToken}">Click this link</a>`,
  }
  sgMail.setApiKey(process.env.SENDGRID_KEY)
  await sgMail.send(mail)

  return newUser
}

module.exports = {
  addUser
}
