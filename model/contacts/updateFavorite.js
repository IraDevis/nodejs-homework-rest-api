const { contacts } = require('../../db/model')

const updateFavorite = async (contactId, body) => {
  await contacts.findByIdAndUpdate(contactId, { $set: body })
  return contacts.findById(contactId)
}

module.exports = { updateFavorite }
