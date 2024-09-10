require('dotenv').config();
const express = require('express');
const apiRouter = require('./server');
const cors = require('cors');
const { errorLogs, handlerError } = require('./middlewares/error.handler');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hola mundo");
});

apiRouter(app);

app.use(handlerError);
app.use(errorLogs);

app.listen(port, (req, res) => {
  console.log(`Escuchando en el puerto ${port}`);
});
