const express = require('express');
const {
  getAllUsers
} = require('../services/servicesUsers');
const router = express.Router();

router.get('/', getAllUsers);

module.exports = router;
