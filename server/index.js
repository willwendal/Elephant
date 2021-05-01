const express = require('express')
const router = require('./router')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = 3005

app.use(cors())
app.use(express.json())
app.use(router);

app.listen(PORT, console.log(`Server listening on http:/localhost:${PORT}`));
