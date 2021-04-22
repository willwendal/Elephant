const express = require('express');
const router = require('./router');
const connection = require('./models/index');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(router);

(async function () {
  try {
    await connection;
    console.log('we are connected to the dataBase');
    app.listen(PORT, () => {
      console.log(`Connected at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();