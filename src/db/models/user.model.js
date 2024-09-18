const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },

  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },

  password: {
    allowNull: false,
    type: DataTypes.STRING
  },

  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'client'
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
  }
};

class User extends Model {
  static associate(models) {
    this.hasOne(models.Client, { as: 'Client', foreignKey: 'userIdFk'});
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: true
    }
  }
};

module.exports = {
  USER_TABLE,
  UserSchema,
  User
};
