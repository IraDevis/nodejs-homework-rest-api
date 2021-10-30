const { User } = require('../../db/userModel');

const logoutController = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user._id, { $set: { token: null } })
    res.status(204).json()
  } catch (error) {
    next(error);
  }
}

module.exports = { logoutController };
