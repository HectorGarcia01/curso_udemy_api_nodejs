require('dotenv').config();

module.exports = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.USER_POSTGRES,
  dbPassword: process.env.PASSWORD_POSTGRES,
  dbHost: process.env.HOST_POSTGRES,
  dbName: process.env.DB_POSTGRES,
  dbPort: process.env.PORT_POSTGRES
};
