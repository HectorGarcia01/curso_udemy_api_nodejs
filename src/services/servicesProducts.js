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
    const product = await models.Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).send({ message: "Producto no encontrado!!" });
    }

    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createNewProduct = async (req, res) => {
  try {
    const product = await models.Product.findOne({ where: { name: req.body.name }});

    if (product) {
      return res.status(409).send({ message: "El producto ya existe!!" });
    }

    await models.Product.create(req.body);
    res.status(200).send({ message: "Producto creado con éxito!!" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await models.Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).send({ message: "Producto no encontrado." });
    }

    await product.update(req.body);
    res.status(200).send({ message: "Producto actualizado con éxito." });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await models.Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).send({ message: "Producto no encontrado." });
    }

    await product.destroy();
    res.status(200).send({ message: "Producto eliminado con éxito!!" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createNewProduct,
  updateProduct,
  deleteProduct
};
