const Joi = require('joi');

const schemaClientCreate = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required(),
  lastname: Joi.string()
    .min(5)
    .max(30)
    .required(),
  phone: Joi.string()
    .max(30)
    .required()
});

const schemaClientUpdate = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30),
  lastname: Joi.string()
    .min(5)
    .max(30),
  phone: Joi.string()
    .max(30)
});

const schemaGetClient = Joi.object({
  id: Joi.number()
    .integer()
    .required()
});

module.exports = {
  schemaClientCreate,
  schemaClientUpdate,
  schemaGetClient
};
