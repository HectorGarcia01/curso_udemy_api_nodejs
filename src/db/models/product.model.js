const { Model, DataTypes, Sequelize } = require('sequelize');
const { CATEGORY_TABLE } = require('./category.model');

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
    defaultValue: Sequelize.NOW
  },

  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },

  categoryIdFk: {
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },

    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
};

class Product extends Model {
  static associate(models) {
    this.belongsTo(models.Category, { as: 'Category', foreignKey: 'categoryIdFk' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timeestamps: true
    }
  }
};

module.exports = {
  PRODUCT_TABLE,
  ProductSchema,
  Product
};
