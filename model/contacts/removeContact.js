const { contacts } = require('../../db/model');

const removeContact = async (contactId) => {
  await contacts.findByIdAndDelete(contactId)
  return { message: 'contact is deleted' }
}

module.exports = { removeContact }
