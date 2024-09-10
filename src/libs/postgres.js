const { Pool } = require('pg');

const { HOST_POSTGRES, USER_POSTGRES, PASSWORD_POSTGRES, DB_POSTGRES, PORT_POSTGRES } = process.env;

const pool = new Pool ({
    host: HOST_POSTGRES,
    port: PORT_POSTGRES,
    user: USER_POSTGRES,
    password: PASSWORD_POSTGRES,
    database: DB_POSTGRES
});

module.exports = pool;
