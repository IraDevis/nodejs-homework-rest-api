const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { User } = require('../../db/userModel');

// const { SECRET_KEY } = process.env

const login = async ({ email, password }) => {
  const account = await User.findOne({ email });
  if (!account) {
    return account;
  }

  if (!(await bcrypt.compare(password, account.password))) {
    return false;
  }

  // const payload = {
  //   id: user._id
  // }

  const token = jwt.sign(
    {
      email: account.email,
      password: account.password,
      id: account._id,
    },
    process.env.SECRET_KEY
  );

  await User.findOneAndUpdate({ email }, { token });

  return {
    token,
    User: {
      email: account.email,
      subscription: account.subscription,
    },
  };
};

module.exports = { login };
