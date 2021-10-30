const express = require('express');
const router = express.Router();

const {
  getUser,
  loginController,
  logoutController,
  register,
  avatarController
} = require('../../controllers/users');

const validation = require('../../middlewares/validation');
const { authorization } = require('../../middlewares/auth');
const { upload } = require('../../middlewares/upload')

router.post('/signup', validation.userValid, register)
router.post('/login', validation.userValid, loginController)
router.post('/logout', authorization, logoutController)
router.get('/current', authorization, getUser)
router.patch('/avatars', authorization, upload.single('avatar'), avatarController);

module.exports = router
