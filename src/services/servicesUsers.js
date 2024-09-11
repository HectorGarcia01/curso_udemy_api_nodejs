const { models } = require('../libs/sequelize');
const getAllUsers = async (req, res) => {
  try {
    const response = await models.User.findAll();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await models.User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).send({ message: "Usuario no encontrado!! "});
    }

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const createUser = async (req, res) => {
  try {
    const user = await models.User.findOne({ where: { email: req.body.email } });
    console.log(user);
    if (user) {
      return res.status(409).send({ message: "El usuario ya existe!!" });
    }

    await models.User.create(req.body);
    res.status(201).send({ message: "Usuario creado con éxito!!" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await models.User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).send({ message: "Usuario no encontrado." });
    }

    await user.update(req.body);
    res.status(200).send({ message: "Usuario actualizado con éxito!!" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await models.User.findOne({ where: { id: req.params.id } });

    if (!user) {
      return res.status(404).send({ message: "Usuario no encontrado." });
    }

    await user.destroy();
    res.status(200).send({ message: "Usuario eliminado con éxito!!" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
