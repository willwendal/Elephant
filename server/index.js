const express = require('express');
const router = require('./router');
const connection = require('./models/index');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(router);

(async function () {
  try {
    await connection;
    console.log('we are connected to the dataBase');
    app.listen(port, () => {
      console.log(`Connected at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();