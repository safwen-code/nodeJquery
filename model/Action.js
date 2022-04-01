const mongoose = require('mongoose')
const schema = mongoose.Schema

const ActionSchema = schema({
  nomAction: {
    type: String,
  },
  PA: {
    type: String,
  },
  date: {
    type: Date,
  },
  state: {
    type: Number,
  },
})

module.exports = Action = mongoose.model('Action', ActionSchema)
