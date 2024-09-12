const { User, UserSchema } = require('./user.model');
const { Product, ProductSchema } = require('./product.model');
const { Client, ClientSchema } = require('./client.model');

const setupModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Client.init(ClientSchema, Client.config(sequelize));

  Client.associate(sequelize.models);
};

module.exports = setupModels;
