var Image = require('../models/Image')

var functions = {
  creatImage: function (req, res_) {
    Image.create({ name: req.body.name })
    res_.json({ success: true, msg: 'Hello ' })
  },

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
          res.json({ success: true, data: image })
        }
      })
    }
    //     console.log(image)
    //     return res_.json({ success: true, msg: image.name })
    //   } else {
    //     return res.json({ success: false, msg: 'No Headers' })
    //   }
    // },
    // function(err, image) {
    //   if (err) throw err
    //   if (!image) {
    //     res.status(403).send({
    //       success: false,
    //       msg: 'name home screem not found',
    //     })
    //   } else {
    //     res.json({ success: true, msg: 'Hello ' })
    //   }
    // },
  },
}

module.exports = functions
