const express = require('express');
const {
  getAllCategories,
  getCategory,
  createNewCategory,
  updateCategory,
  deleteCategory
} = require('../services/servicesCategory');
const validatorHandler = require('../middlewares/validator.handler');
const {
  schemaCategoryCreate,
  schemaCategoryUpdate,
  schemaGetCategory
} = require('../schemas/schemaCategory');

const router = express.Router();

router.get('/', getAllCategories);
router.get('/:id', validatorHandler(schemaGetCategory, 'params'), getCategory);
router.post('/', validatorHandler(schemaCategoryCreate, 'body'), createNewCategory);
router.patch('/:id',
  validatorHandler(schemaGetCategory, 'params'), //Para evaluar si envía un id
  validatorHandler(schemaCategoryUpdate, 'body'), //Para evaluar los campos enviados
  updateCategory
);
router.delete('/:id', deleteCategory);

module.exports = router;
