const { models } = require('../libs/sequelize');

const getAllClients = async (req, res) => {
  try {
    const clients = await models.Client.findAll({
      include: {
        model: models.User,
        as: 'User',
        attributes: ['id', 'email', 'role']
      }
    });

    if (clients.length === 0) {
      return res.status(404).send({ message: "No hay registros de clientes." });
    }

    res.status(200).send(clients);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getClient = async (req, res) => {
  try {
    const client = await models.Client.findByPk(req.params.id,
      {
        include: {
          model: models.User,
          as: 'User',
          attributes: ['id', 'email', 'role']
        }
      });

    if (!client) {
      return res.status(404).send({ message: "Cliente no encontrado!!" });
    }

    res.status(200).send(client);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createClient = async (req, res) => {
  try {
    const { userIdFk } = req.body;
    const [user, userClient] = await Promise.all([
      models.User.findByPk(userIdFk),
      models.Client.findOne({ where: { userIdFk } })
    ]);

    if (!user) {
      return res.status(404).send({ message: "El usuario no existe." });
    }

    if (userClient) {
      return res.status(400).send({ message: "El usuario ya tiene un cliente asignado, intenta con otro." });
    }

    await models.Client.create(req.body);
    res.status(201).send({ message: "Cliente creado con éxito!!" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateClient = async (req, res) => {
  try {
    const { userIdFk } = req.body;
    const client = await models.Client.findByPk(req.params.id);

    if (!client) {
      return res.status(404).send({ message: "Cliente no encontrado." });
    }

    if (userIdFk) {
      const [user, userClient] = await Promise.all([
        models.User.findByPk(userIdFk),
        userIdFk !== client.userIdFk ? models.Client.findOne({ where: { userIdFk } }) : null
      ]);

      if (!user) {
        return res.status(404).send({ message: "El usuario no existe." });
      }

      if (userClient) {
        return res.status(400).send({ message: "El usuario ya tiene un cliente asignado, intenta con otro." });
      }
    }

    await client.update(req.body);
    res.status(200).send({ message: "Cliente actualizado con éxito!!" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await models.Client.findOne({ where: { id } });

    if (!client) {
      return res.status(404).send({ message: "Cliente no encontrado." });
    }

    await client.destroy();
    res.status(200).send({ message: "Cliente eliminado con éxito!!" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllClients,
  getClient,
  createClient,
  updateClient,
  deleteClient
};
