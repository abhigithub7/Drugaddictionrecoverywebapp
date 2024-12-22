const express = require('express')
const router = express.Router()
const {register} = require('../controller/control')
const {login} = require('../controller/control')

router.post('/register',register)
router.post('/login',login)


module.exports = router;