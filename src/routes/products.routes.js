const express = require('express');
const {
  getAllProducts,
  getProduct,
  createNewProduct,
  updateProduct,
  deleteProduct
} = require('../services/servicesProducts');
const validatorHandler = require('../middlewares/validator.handler');
const {
  schemaProductCreate,
  schemaProductUpdate,
  schemaGetProduct
} = require('../schemas/schemaProduct');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', validatorHandler(schemaGetProduct, 'params'), getProduct);
router.post('/', validatorHandler(schemaProductCreate, 'body'), createNewProduct);
router.patch('/:id',
  validatorHandler(schemaGetProduct, 'params'), //Para evaluar si envía un id
  validatorHandler(schemaProductUpdate, 'body'), //Para evaluar los campos enviados
  updateProduct
);
router.delete('/:id', deleteProduct);

module.exports = router;
