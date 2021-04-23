const mongoose = require('mongoose')
const { Schema } = mongoose

const EventsSchema = new Schema({
  occasion: { type: String, required: true },
  date: { type: Date, require: true },
  location: { type: String, require: true },
  neverforget: { type: Boolean, require: false }

})

module.exports = mongoose.model('elephant', EventsSchema)
