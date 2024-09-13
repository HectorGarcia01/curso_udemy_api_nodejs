'use strict';

const { DataTypes } = require('sequelize');
const { PRODUCT_TABLE } = require('../models/product.model');
const { CATEGORY_TABLE } = require('../models/category.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.removeConstraint(PRODUCT_TABLE, 'products_categoryIdFk_key')
    await queryInterface.changeColumn(PRODUCT_TABLE, 'categoryIdFk', {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: CATEGORY_TABLE,
        key: 'id'
      },

      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down (queryInterface) {

  }
};
