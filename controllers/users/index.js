const { getUser } = require('./getUser');
const { loginController } = require('./login');
const { logoutController } = require('./logout');
const { register } = require('./register');
const { avatarController } = require('./avatar');
const { verifyController, verifyAgainController } = require('./verifyEmail')

module.exports = {
  getUser,
  loginController,
  logoutController,
  register,
  avatarController,
  verifyController,
  verifyAgainController
}
