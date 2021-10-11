const mongoose = require('mongoose');
require('dotenv').config();

const connect = async function (DB_HOST) {
  try {
    await mongoose.connect(DB_HOST);
    console.log('Database connected successful');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = {
  connect,
};
