const { contacts } = require("../../db/contactModel");

const listContacts = async () => {
  const allContacts = await contacts.find();
  return allContacts;
};

module.exports = { listContacts };
