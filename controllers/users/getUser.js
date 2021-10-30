const userOperations = require('../../model/users');

const getUser = async (req, res, next) => {
  try {
    const { email } = await userOperations.getUserById(req.user);
    res.status(200).json({ email });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUser };
