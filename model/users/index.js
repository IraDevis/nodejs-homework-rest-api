const { addUser } = require('./addUser');
const { getUserById } = require('./getUserById');
const { login } = require('./login');
const { verify, verifyAgain } = require('./verify')
// const { logout } = require('./logout');

module.exports = {
  addUser,
  getUserById,
  login,
  verify,
  verifyAgain
  // logout
}
