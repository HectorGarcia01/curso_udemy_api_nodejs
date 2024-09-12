const { dbUser, dbPassword, dbHost, dbPort, dbName } = require('../config/config');

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres'
  },

  production: {
    url: URI,
    dialect: 'postgres'
  }
};
