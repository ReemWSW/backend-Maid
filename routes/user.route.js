const express = require('express')
const actions = require('../methods/user.method')
const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    res.send('user_method')
})

// //@desc set new maid
// //@route POST /setmaid
userRouter.post('/setmaid', actions.setMaid)


module.exports = userRouter