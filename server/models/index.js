const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/elephant', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

module.exports = mongoose;