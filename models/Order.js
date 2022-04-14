var mongoose = require('mongoose')
var Enum = require('./enum')
var Schema = mongoose.Schema

var orderSchema = new Schema({
  maidid: String,
  customerid: String,
  category: { type: Enum, enum: ['WASH', 'FURNITURE', 'CLEANING', 'ALL'] },
  address: String,
  type: String,
  detail: String,
  datetime: Date,
  lat: Number,
  long: Number,
  status: { type: Enum, enum: ['WAIT', 'ACCEPT', 'SUCCESS'] },
})

module.exports = mongoose.model('Order', orderSchema)
