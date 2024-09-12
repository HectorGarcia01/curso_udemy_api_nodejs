'use strict';

const { CLIENT_TABLE, ClientSchema } = require('../models/client.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CLIENT_TABLE, ClientSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CLIENT_TABLE);
  }
};
