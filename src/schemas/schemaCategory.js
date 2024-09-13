const Joi = require('joi');

const schemaCategoryCreate = Joi.object({
  name: Joi.string()
    .min(3)
    .max(15)
    .required(),
  image: Joi.string()
    .uri()
    .required()
});

const schemaCategoryUpdate = Joi.object({
  name: Joi.string()
    .min(3)
    .max(15),
  image: Joi.string()
    .uri()
});

const schemaGetCategory = Joi.object({
  id: Joi.number()
    .integer()
    .required()
})

module.exports = {
  schemaCategoryCreate,
  schemaCategoryUpdate,
  schemaGetCategory
};
