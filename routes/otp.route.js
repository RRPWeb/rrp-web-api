const express = require('express')
const otprouter  = express.Router()
const otpController = require('../controllers/otp.controller')


otprouter.get("/signin",otpController.signinOtp)
otprouter.get("/login",otpController.loginOtp)
module.exports = otprouter