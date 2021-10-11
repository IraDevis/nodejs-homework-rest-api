const { contacts } = require('../../db/model');

const listContacts = async () => {
  const allContacts = await contacts.find()
  return (allContacts)
}

module.exports = { listContacts }
