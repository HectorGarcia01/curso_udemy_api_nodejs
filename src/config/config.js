require('dotenv').config();

module.exports = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.USER_DB,
  dbPassword: process.env.PASSWORD_DB,
  dbHost: process.env.HOST_DB,
  dbName: process.env.DB_NAME,
  dbPort: process.env.PORT_DB
};
