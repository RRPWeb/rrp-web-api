const express = require('express')
const otprouter  = express.Router()
const otpController = require('../controllers/otp.controller')


otprouter.get("/signin",otpController.signinOtp)

module.exports = otprouter