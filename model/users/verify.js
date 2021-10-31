const { User } = require('../../db/userModel')
const { BadRequest } = require('http-errors')
const sgMail = require('@sendgrid/mail')

const verify = async (params) => {
  const verifyToken = params.verificationToken
  const { _id } = await User.findOneAndUpdate({ verifyToken }, { verify: true, verifyToken: null })
  const user = await User.findById(_id)
  return user
}

const verifyAgain = async ({ email }) => {
  const user = await User.findOne({ email })
  const verifyToken = user.verifyToken

  if (!user) {
    throw new BadRequest('not found')
  }

  if (user.verify) {
    throw new BadRequest('Verification has already been passed')
  }

  const mail = {
    to: email,
    from: 'iradevis@gmail.com',
    subject: 'Welcome!',
    text: `Dear User! Let's verify your email. <a target="_blank" href="http://localhost:3000/api/users/verify/${verifyToken}">Click this link</a>`,
    html: `Dear User! Let's verify your email. <a target="_blank" href="http://localhost:3000/api/users/verify/${verifyToken}">Click this link</a>`,
  }
  sgMail.setApiKey(process.env.SENDGRID_KEY)
  await sgMail.send(mail)

  return { message: 'verification email sent' }
}

module.exports = {
  verify,
  verifyAgain
}
