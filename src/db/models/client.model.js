const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');

const CLIENT_TABLE = 'clients';

const ClientSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING
  },

  lastname: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name'
  },

  phone: {
    allowNull: false,
    type: DataTypes.STRING,
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

  userId: {
    field: 'user_idFk',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },

    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
};

class Client extends Model {
  static associate(models) {
    this.belongsTo(models.Users, { as: 'users' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENT_TABLE,
      modelName: 'Client',
      timeestamps: true
    }
  }
};

module.exports = {
  CLIENT_TABLE,
  ClientSchema,
  Client
};
