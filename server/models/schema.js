const mongoose = require('mongoose')
const { Schema } = mongoose

const EventsSchema = new Schema({
  occasion: { type: String, required: true },
  location: { type: String, require: true },
  date: { type: Date, require: true }

})

module.exports = mongoose.model('elephant', EventsSchema)
