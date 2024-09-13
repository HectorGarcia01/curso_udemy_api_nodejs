const { models } = require('../libs/sequelize');

const getAllProducts = async (req, res) => {
  try {
    const products = await models.Product.findAll({
      include: {
        model: models.Category,
        as: 'Category',
        attributes: ['id', 'name', 'image']
      }
    });

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
    const product = await models.Product.findByPk(id, {
      include: {
        model: models.Category,
        as: 'Category',
        attributes: ['id', 'name', 'image']
      }
    });

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
    const { name, categoryIdFk } = req.body;
    const [product, category] = await Promise.all([
      models.Product.findOne({ where: { name } }),
      models.Category.findByPk(categoryIdFk)
    ]);

    if (product) {
      return res.status(409).send({ message: "El producto ya existe!!" });
    }

    if (!category) {
      return res.status(404).send({ message: "La categoría no existe." });
    }

    await models.Product.create(req.body);
    res.status(200).send({ message: "Producto creado con éxito!!" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryIdFk } = req.body;
    const [product, category] = await Promise.all([
      models.Product.findByPk(id),
      models.Category.findByPk(categoryIdFk)
    ]);

    if (!product) {
      return res.status(404).send({ message: "Producto no encontrado." });
    }

    if (!category) {
      return res.status(404).send({ message: "La categoría no existe." });
    }

    await product.update(req.body);
    res.status(200).send({ message: "Producto actualizado con éxito." });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await models.Product.findByPk(id);

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
