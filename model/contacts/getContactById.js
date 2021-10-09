const { contacts } = require('../../db/model');

const getContactById = async (contactId) => {
  const contact = await contacts.findById(contactId)
  return contact
}

module.exports = { getContactById }
