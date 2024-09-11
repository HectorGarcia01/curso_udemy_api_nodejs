const express = require('express');
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require('../services/servicesUsers');
const validatorHandler = require('../middlewares/validator.handler');
const {
  schemaUserCreate,
  schemaUserUpdate,
  schemaGetUser
} = require('../schemas/schemaUser');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', validatorHandler(schemaGetUser, 'params'), getUser);
router.post('/', validatorHandler(schemaUserCreate, 'body'), createUser);
router.patch('/:id',
  validatorHandler(schemaGetUser, 'params'), //Para evaluar si envía un id
  validatorHandler(schemaUserUpdate, 'body'), //Para evaluar los campos enviados
  updateUser
);
router.delete('/:id', validatorHandler(schemaGetUser, 'params'), deleteUser);

module.exports = router;
