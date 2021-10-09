const contacstOperations = require('../../model/contacts');

const deleteById = async (req, res, next) => {
  try {
    const id = req.params.contactId;
    const contact = await contacstOperations.removeContact(id);
    if (!contact) {
      res.status(404).json({ message: 'Not found' })
      return
    }
    res.status(200).json(contact)
  } catch (error) {
    next(error)
  }
};

module.exports = {

  deleteById
};
