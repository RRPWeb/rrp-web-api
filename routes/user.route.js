const express = require('express')
const userRouter  = express.Router()
const userController = require('../controllers/user.controller')


authRouter.get("/",userController.basicInfo)

module.exports = userRouter