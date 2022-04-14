const express = require('express')
const actions = require('../methods/order.method')
const orderRouter = express.Router()

orderRouter.get('/', (req, res) => {
    res.send('order_method')
})

// //@desc Adding new order
// //@route POST /setorder
orderRouter.post('/setorder', actions.sendOrder)

module.exports = orderRouter