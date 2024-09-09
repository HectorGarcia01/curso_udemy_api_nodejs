const getAllUsers = async (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    return res.json({
      limit,
      offset
    });
  }

  res.send("No hay ningún parámetro");
};

module.exports = {
  getAllUsers
}
