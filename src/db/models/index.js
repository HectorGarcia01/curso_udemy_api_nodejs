const { User, UserSchema } = require('./user.model');
const { Client, ClientSchema } = require('./client.model');
const { Product, ProductSchema } = require('./product.model');
const { Category, CategorySchema } = require('./category.model');

const setupModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
  Client.init(ClientSchema, Client.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));

  User.associate(sequelize.models);
  Client.associate(sequelize.models);

  Product.associate(sequelize.models);
  Category.associate(sequelize.models);
};

module.exports = setupModels;
