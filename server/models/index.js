const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
})

module.exports = mongoose
