const { Sequelize } = require('sequelize');
const { dbUser, dbPassword, dbHost, dbPort, dbName } = require('../config/config');

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres'
});

module.exports = sequelize;
