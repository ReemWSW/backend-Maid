const express = require('express')
const actions = require('../methods/order.method')
const orderRouter = express.Router()

orderRouter.get('/', (req, res) => {
    res.send('order_method')
})

// //@desc Adding new user
// //@route POST /adduser
orderRouter.post('/setorder', actions.sendOrder)

// //@desc Get info on a user
// //@route GET /getinfo
// orderRouter.get('/getinfo', actions.getinfo)

module.exports = orderRouter