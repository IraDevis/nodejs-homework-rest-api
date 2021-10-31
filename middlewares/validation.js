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

const userValid = (req, res, next) => {
  const userSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().required(),
    subscription: Joi.string().optional(),
    token: Joi.string().optional()
  })

  const result = userSchema.validate(req.body)

  if (result.error) {
    return res.status(400).json({ status: result.error.details })
  }

  next()
}

const verifyValid = async (req, res, next) => {
  const verifySchema = Joi.object({
    email: Joi.string().required()
  })

  const result = verifySchema.validate(req.body)

  if (result.error) {
    return res.status(400).json({ message: 'missing required fields' })
  }
  next()
}

module.exports = { postValid, patchValid, userValid, verifyValid }
