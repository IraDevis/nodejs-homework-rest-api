const Joi = require('joi');

const postValid = (req, res, next) => {
  const postSchema = Joi.object({
    email: Joi.string().required(),
    name: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean().optional()
  })

  const result = postSchema.validate(req.body)

  if (result.error) {
    return res.status(400).json({ status: result.error.details })
  }

  next()
}

const patchValid = (req, res, next) => {
  const patchSchema = Joi.object({
    email: Joi.string(),
    name: Joi.string(),
    phone: Joi.string(),
    favorite: Joi.boolean().optional()
  })

  const result = patchSchema.validate(req.body)

  if (result.error) {
    return res.status(400).json({ status: result.error.details })
  }
  next()
}

module.exports = { postValid, patchValid }
