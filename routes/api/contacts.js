const express = require('express');
const router = express.Router();

const {
  getAll,
  getById,
  deleteById,
  updateById,
  add,
  patchFavorite
} = require('../../controllers/contacts');

const validation = require('../../middlewares/validation');

router.get('/', getAll)
router.get('/:contactId', getById)
router.post('/', validation.postValid, add)
router.delete('/:contactId', deleteById)
router.patch('/:contactId', validation.patchValid, updateById)
router.patch('/:contactId/favorite', validation.patchValid, patchFavorite)

module.exports = router
