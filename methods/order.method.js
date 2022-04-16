var Order = require('../models/Order')
var User = require('../models/User')

var functions = {
  sendOrder: function (req, res) {
    if (!req.body) {
      console.log(re.body)
      res.json({ success: false, message: 'ไม่สามรถส่งงานได้' })
    } else {
      var newOrder = Order({
        customer: {
          id: req.body.customer.id,
          name: req.body.customer.name,
          phone: req.body.customer.phone,
        },
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

  getOrder: function (req, res) {
    var waitOrder = []
    var acceptOrder = []
    var successOrder = []
    if (!req.query) {
      res.status(404).json({ success: false, message: 'ไม่สามรถทำรายการได้' })
    } else {
      Order.find({}).then((orders) => {
        for (var index in orders) {
          if (orders[index]['status'] === 'StatusOrder.WAIT')
            waitOrder.push(orders[index])
          if (orders[index]['status'] === 'StatusOrder.ACCEPT')
            acceptOrder.push(orders[index])
          if (orders[index]['status'] === 'StatusOrder.SUCCESS')
            successOrder.push(orders[index])
        }
        console.log(waitOrder)
        console.log(acceptOrder)
        console.log(successOrder)

        res
          .status(200)
          .json({
            success: true,
            message: 'พบข้อมูลแล้ว',
            data: { waitOrder, acceptOrder, successOrder },
          })
          .catch((err) => {
            console.log(err)
            res.status(404).json({ success: false, message: 'ไม่พบข้อมูล' })
          })
      })
    }
  },

  setStatusOrder: function (req, res) {
    if (!req.body) {
      res.json({ success: false, message: 'ไม่สามรถส่งงานได้' })
    } else {
      Order.findByIdAndUpdate(
        { _id: req.body.order },
        { $set: { status: req.body.status } },
        function (err, order) {
          if (err) {
            console.log(err)
            res
              .status(404)
              .json({ success: false, message: 'ไม่สามารถบันทึกงานได้' })
          } else {
            console.log(order)
            res.status(200).json({
              success: true,
              message: 'บันทึกงานสำเร็จแล้ว',
              data: order,
            })
          }
        },
      )
    }
  },

  scoreOrder: function (req, res) {
    if (!req.body) {
      res.json({ success: false, message: 'ไม่สามรถส่งงานได้' })
    } else {
      Order.findByIdAndUpdate(
        { _id: req.body.order },
        { $set: { score: req.body.score } },
      )
        .then((order) =>
          res.status(200).json({
            success: true,
            message: 'ให้คะแนนงานสำเร็จแล้ว',
            data: order,
          }),
        )
        .catch(() =>
          res
            .status(404)
            .json({ success: false, message: 'ไม่สามารถบันทึกงานได้' }),
        )
    }
  },
}

module.exports = functions
