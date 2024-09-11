const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },

  price: {
    allowNull: false,
    type: DataTypes.DOUBLE
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultVaule: Sequelize.NOW
  }
};

class Product extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timeestamps: false
    }
  }
};

module.exports = {
  PRODUCT_TABLE,
  ProductSchema,
  Product
};
