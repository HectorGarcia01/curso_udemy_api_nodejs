const Joi = require('joi');

const schemaUserCreate = Joi.object({
  email: Joi.string()
    .email()
    .max(20)
    .required(),
  password: Joi.string()
    .min(8)
    .max(25)
    .required()
});

const schemaUserUpdate = Joi.object({
  password: Joi.string()
    .min(8)
});

const schemaGetUser = Joi.object({
  id: Joi.number()
    .integer()
    .required()
});

module.exports = {
  schemaUserCreate,
  schemaUserUpdate,
  schemaGetUser
};
