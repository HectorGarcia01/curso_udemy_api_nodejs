const { models } = require('../libs/sequelize');

const getAllCategories = async (req, res) => {
  try {
    const categories = await models.Category.findAll();

    if (categories.length === 0) {
      return res.status(404).send({ message: "No hay registros de categorías." });
    }

    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await models.Category.findByPk(id);

    if (!category) {
      return res.status(404).send({ message: "Categoría no encontrada!!" });
    }

    res.status(200).send(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createNewCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await models.Category.findOne({ where: { name } });

    if (category) {
      return res.status(409).send({ message: "La categoría ya existe!!" });
    }

    await models.Category.create(req.body);
    res.status(200).send({ message: "Categoría creada con éxito!!" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await models.Category.findByPk(id);

    if (!category) {
      return res.status(404).send({ message: "Categoría no encontrada." });
    }

    await category.update(req.body);
    res.status(200).send({ message: "Categoría actualizada con éxito." });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await models.Category.findByPk(id);

    if (!category) {
      return res.status(404).send({ message: "Categoría no encontrada." });
    }

    await category.destroy();
    res.status(200).send({ message: "Categoría eliminada con éxito!!" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllCategories,
  getCategory,
  createNewCategory,
  updateCategory,
  deleteCategory
};
