var mongoose = require('mongoose')
var Schema = mongoose.Schema

var imageSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: [String],
    },
  },
  { collection: 'image' },
)

module.exports = mongoose.model('Image', imageSchema)
