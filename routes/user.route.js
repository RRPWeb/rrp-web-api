const express = require('express')
const userRouter  = express.Router()
const userController = require('../controllers/user.controller')
const authValidator = require('./middlewares/authvalidator');


userRouter.get("/",authValidator,userController.userProfiles)

module.exports = userRouter