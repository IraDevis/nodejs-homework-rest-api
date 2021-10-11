const { contacts } = require('../../db/model.js');

const addContact = async ({ name, email, phone, favorite }) => {
  const newContact = await contacts({
    name,
    email,
    phone,
    favorite
  })
  await newContact.save()
  return newContact
}

module.exports = { addContact }
