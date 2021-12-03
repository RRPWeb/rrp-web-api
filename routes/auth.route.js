const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth.controller");
const authValidator = require("../middlewares/authvalidator");

authRouter.get("/otp/signin", authController.signinOtp);
authRouter.get("/otp/login", authController.loginOtp);
authRouter.post("/login", authController.login);
authRouter.post("/signin", authController.signin);
authRouter.post("/refreshToken", authValidator, authController.refreshToken);
authRouter.post("/logout", authValidator, authController.logout);
module.exports = authRouter;
