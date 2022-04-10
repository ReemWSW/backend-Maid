var Image = require('../models/Image')

var functions = {
    getImage: function (req, res) {
    if (req.headers.name) {
      Image.findOne({ name: req.headers.name }, function (err, image) {
        if (err) throw err
        if (!image) {
          res.status(403).send({
            success: false,
            msg: 'name page not found',
          })
        }else{
          res.status(200).send(image)
        }
      })
    }
  },
}

module.exports = functions
