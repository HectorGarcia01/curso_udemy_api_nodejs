'use strict';

const { DataTypes } = require('sequelize');
const { CLIENT_TABLE } = require('../models/client.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn(CLIENT_TABLE, 'userIdFk', {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true
    });
  },

  async down (queryInterface) {

  }
};
