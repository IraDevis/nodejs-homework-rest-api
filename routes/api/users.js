const express = require('express');
const router = express.Router();

const {
  getUser,
  loginController,
  logoutController,
  register
} = require('../../controllers/users');

const validation = require('../../middlewares/validation');
const { authorization } = require('../../middlewares/auth');

router.post('/signup', validation.userValid, register)
router.post('/login', validation.userValid, loginController)
router.post('/logout', authorization, logoutController)
router.get('/current', authorization, getUser)

module.exports = router
