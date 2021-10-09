const { getAll } = require('./getAll');
const { getById } = require('./getById');
const { deleteById } = require('./deleteById');
const { updateById } = require('./updateById');
const { add } = require('./add');
const { patchFavorite } = require('./patchFavorite')

module.exports = {
  getAll,
  getById,
  deleteById,
  updateById,
  add,
  patchFavorite
}
