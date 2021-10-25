const { contacts } = require("../../db/contactModel");

const updateFavorite = async (contactId, body) => {
  await contacts.findByIdAndUpdate(contactId, { $set: body });
  return contacts.findById(contactId);
};

module.exports = { updateFavorite };
