const contacstOperations = require('../../model/contacts');

const patchFavorite = async (req, res, next) => {
  try {
    const id = req.params.contactId
    const result = await contacstOperations.updateFavorite(id, req.body)
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = { patchFavorite }
