const { models } = require('../libs/sequelize');

const getAllProducts = async (req, res) => {
  try {
    const products = await models.Product.findAll();

    if (products.length === 0) {
      return res.status(404).send({ message: "No hay registros de productos." });
    }

    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error.message);
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
