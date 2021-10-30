const { getUser } = require('./getUser');
const { loginController } = require('./login');
const { logoutController } = require('./logout');
const { register } = require('./register');
const { avatarController } = require('./avatar')

module.exports = {
  getUser,
  loginController,
  logoutController,
  register,
  avatarController
}
