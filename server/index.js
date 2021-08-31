const express = require('express')
const router = require('./router')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(router);


app.listen(process.env.PORT_ID, console.log(`Server listening on http:/localhost:${process.env.PORT_ID}`));
module.exports = app;
