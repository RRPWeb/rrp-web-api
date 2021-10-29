const express = require('express')
const authRouter  = express.Router()
const authController = require('../controllers/auth.controller')


authouter.get("/otp/signin",authController.signinOtp)
otprouter.get("/otp/login",authController.loginOtp)
module.exports = authRouter