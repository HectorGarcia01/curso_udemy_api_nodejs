const Joi = require('joi');

const schemaProductCreate = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(10)
    .required(),
  price: Joi.number()
    .min(10)
    .required(),
  categoryIdFk: Joi.number()
    .integer()
    .required()
});

const schemaProductUpdate = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(10),
  price: Joi.number()
    .min(10),
  categoryIdFk: Joi.number()
    .integer()
});

const schemaGetProduct = Joi.object({
  id: Joi.number()
    .integer()
    .required()
})

module.exports = {
  schemaProductCreate,
  schemaProductUpdate,
  schemaGetProduct
};
