const express = require('express')
const otprouter  = express.Router()
const otpController = require('../controllers/otpController')


otprouter.get("/signin",otpController.signinOtp)

module.exports = otprouter