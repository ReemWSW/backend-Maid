const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, require: true },
    tel: { type: Number, require: true },
    telsos:{type:Number, require: false},
    bod: { type: Date, require: true },
    address: {type:String, require:true},
    location: {type:String,require:false},
  })
  
  module.exports = mongoose.model('User', UserSchema)