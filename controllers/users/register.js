const userOperations = require('../../model/users');
const { Conflict } = require('http-errors')

const register = async (req, res, next) => {
  try {
    const newUser = await userOperations.addUser(req.body);
    if (!newUser) {
      throw new Conflict('Sorry, this Email is already use');
    }
    const { email, password } = newUser;
    res.status(201).json({ email, password, message: 'Success' });
  } catch (error) {
    next(error);
  }
};

module.exports = { register };
