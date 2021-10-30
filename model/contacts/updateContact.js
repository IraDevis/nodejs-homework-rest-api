const { contacts } = require("../../db/contactModel");

const updateContact = async (contactId, body) => {
  await contacts.findByIdAndUpdate(contactId, { $set: body });
  return contacts.findById(contactId);
};

module.exports = { updateContact };
