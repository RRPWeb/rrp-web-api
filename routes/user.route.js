const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");

userRouter.get("/", userController.userProfiles);
userRouter.post("/photoUpload", userController.photoUpload);

module.exports = userRouter;
