var Order = require('../models/Order')

var functions = {
  sendOrder: function (req, res) {
    if (!req.body) {
      res.json({ success: false, message: 'ไม่สามรถส่งงานได้' })
    } else {
      var newOrder = Order({
        customerid: req.body.customerid,
        category: req.body.category,
        address: req.body.address,
        lat: req.body.lat,
        long: req.body.long,
        type: req.body.type,
        detail: req.body.detail,
        datetime: req.body.datetime,
        status: req.body.status,
      })
      newOrder.save(function (err, newUser) {
        if (err) {
          console.log(err)
          res
            .status(404)
            .json({ success: false, message: 'ไม่สามารถบันทึกงานได้' })
        } else {
          console.log(newOrder)
          res.status(200).json({
            success: true,
            message: 'บันทึกงานสำเร็จแล้ว',
            data: newOrder,
          })
        }
      })
    }
  },

  
}

module.exports = functions
