const express = require('express')
const actions = require('../methods/auth')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

//@desc Adding new user
//@route POST /adduser
router.post('/registration', actions.registration)

//@desc Authenticate a user
//@route POST /authenticate
router.post('/session', actions.authenticate)

//@desc Get info on a user
//@route GET /getinfo
router.get('/getinfo', actions.getinfo)

module.exports = router