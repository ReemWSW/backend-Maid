var Order = require('../models/Order')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
  sendOrder: function (req, res) {
    if (!req.body) {
      res.json({ success: false, message: 'ไม่สามรถส่งงานได้' })
    } else {
      var newOrder = Order({
        category: req.body.category,
        address: req.body.address,
        lat: req.body.lat,
        long: req.body.long,
        type: req.body.type,
        detail: req.body.detail,
        datetime: req.body.datetime,
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
    // var check = User.findOne({ email: req.body.email })
    // if (check.email != null) {
    //   res.status(300).json({ success: false, message: 'อีเมลล์นี้มีอยู่แล้ว' })
    // } else {
    //   if (!req.body.password) {
    //     res.json({ success: false, message: 'Enter password fields' })
    //   } else if (!req.body.name) {
    //     res.json({ success: false, message: 'Enter name fields' })
    //   } else {
    //     var newUser = User({
    //       email: req.body.email,
    //       name: req.body.name,
    //       password: req.body.password,
    //       phone: req.body.phone,
    //     })

    //     newUser.save(function (err, newUser) {
    //       if (err) {
    //         console.log(err)
    //         res
    //           .status(404)
    //           .json({ success: false, message: 'ไม่สามารถลงทะเบลียนได้' })
    //       } else {
    //         console.log(newUser)
    //         res.status(200).json({
    //           success: true,
    //           message: 'ลงทะเบียนสำเร็จแล้ว',
    //           data: newUser,
    //         })
    //       }
    //     })
    //   }
    // }
  },
  authenticate: function (req, res) {
    User.findOne(
      {
        email: req.body.email,
      },
      function (err, user) {
        if (err) throw err
        if (!user) {
          res.status(403).json({
            success: false,
            message: 'ไม่พบบัญชีผู้ใช้งาน',
          })
        } else {
          user.comparePassword(req.body.password, function (err, isMatch) {
            if (isMatch && !err) {
              var token = jwt.encode(user, config.secret)
              console.log(user.phone)
              res.status(200).json({
                success: true,
                data: {
                  id: user._id,
                  image: user.image,
                  name: user.name,
                  email: user.email,
                  phone: user.phone,
                  token: token,
                },
              })
            } else {
              return res.status(403).json({
                success: false,
                message: 'รหัสผ่านผิดพลาด',
              })
            }
          })
        }
      },
    )
  },
  getinfo: function (req, res) {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      var token = req.headers.authorization.split(' ')[1]
      var decodedtoken = jwt.decode(token, config.secret)
      return res.json({ success: true, msg: 'Hello ' + decodedtoken.name })
    } else {
      return res.json({ success: false, msg: 'No Headers' })
    }
  },
}

module.exports = functions
