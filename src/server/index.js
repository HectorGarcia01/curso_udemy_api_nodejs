const express = require('express');

const apiRouter = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  
  router.use('/products', require('../routes/products.routes'));
  router.use('/users', require('../routes/users.routes'));
};

module.exports = apiRouter;
