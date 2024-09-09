const faker = require('faker');
const boom = require('@hapi/boom');

const getAllProducts = async (req, res) => {
  try {
    const products = [];
    const { size } = req.query;
    const limit = size || 5;

    for (let index = 0; index < limit; index++) {
      products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl()
      })
    }

    res.json(products);
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    res.json({
      'id': id,
      'name': "Teclado",
      'Precio': 30000,
      'Marca': 'XTECH'
    });
  } catch (error) {
    console.log(error);
  }
};

const createNewProduct = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    res.json({
      ok: true,
      data: body
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    res.json({
      message: "Success",
      Product: body,
      id
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    res.json({
      message: "Deleted",
      id
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createNewProduct,
  updateProduct,
  deleteProduct
};
