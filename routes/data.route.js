const express = require('express')
const actions = require('../methods/data')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello data')
})

//@desc Get image ui
//@route GET /image
router.get('/image', actions.getImage)


module.exports = router