const { Client } = require('pg');
require('dotenv');

const { HOST_POSTGRES, USER_POSTGRES, PASSWORD_POSTGRES, DB_POSTGRES, PORT_POSTGRES } = process.env;

const getConnection = async () => {
  const client = new Client({
    host: HOST_POSTGRES,
    port: PORT_POSTGRES,
    user: USER_POSTGRES,
    password: PASSWORD_POSTGRES,
    database: DB_POSTGRES
  });

  await client.connect();
};

module.exports = getConnection;
