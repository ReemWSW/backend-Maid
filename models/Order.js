var mongoose = require('mongoose')
var Categories = require('./enum')
var Schema = mongoose.Schema

var orderSchema = new Schema({
  maidid: String,
  customerid: String,
  category: { type: Categories, enum: ['WASH', 'FURNITURE', 'CLEANING', 'ALL'] },
  address: String,
  type: String,
  detail: String,
  datetime: Date,
  lat: Number,
  long: Number,
  state: { type: String, enum: ['WAIT', 'ACCEPT', 'SUCCESS'] },
})

module.exports = mongoose.model('Order', orderSchema)
