const express = require('express');
const {
  getAllClients,
  getClient,
  createClient,
  updateClient,
  deleteClient
} = require('../services/servicesClient');
const validatorHandler = require('../middlewares/validator.handler');
const {
  schemaClientCreate,
  schemaClientUpdate,
  schemaGetClient
} = require('../schemas/schemaClient');

const router = express.Router();

router.get('/', getAllClients);
router.get('/:id', validatorHandler(schemaGetClient, 'params'), getClient);
router.post('/', validatorHandler(schemaClientCreate, 'body'), createClient);
router.patch('/:id',
  validatorHandler(schemaGetClient, 'params'), //Para evaluar si envía un id
  validatorHandler(schemaClientUpdate, 'body'), //Para evaluar los campos enviados
  updateClient
);
router.delete('/:id', validatorHandler(schemaGetClient, 'params'), deleteClient);

module.exports = router;
