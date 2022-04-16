var mongoose = require('mongoose')
var Enum = require('./enum')
var Schema = mongoose.Schema

var orderSchema = new Schema({
  maid: {
    id: String,
    name: String,
    phone: String,
  },
  customer: {
    id: String,
    name: String,
    phone: String,
  },
  category: { type: Enum, enum: ['WASH', 'FURNITURE', 'CLEANING', 'ALL'] },
  address: String,
  type: String,
  detail: String,
  datetime: Date,
  lat: Number,
  long: Number,
  status: { type: Enum, enum: ['WAIT', 'ACCEPT', 'SUCCESS'] },
  score: { type: Number, default: 0 },
})

module.exports = mongoose.model('Order', orderSchema)
