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
const { authorization } = require('../../middlewares/auth');

router.get('/', authorization, getAll)
router.get('/:contactId', authorization, getById)
router.post('/', authorization, validation.postValid, add)
router.delete('/:contactId', authorization, deleteById)
router.patch('/:contactId', authorization, validation.patchValid, updateById)
router.patch('/:contactId/favorite', authorization, validation.patchValid, patchFavorite)

module.exports = router
