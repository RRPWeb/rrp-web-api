const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth.controller");

authRouter.get("/otp/signin", authController.signinOtp);
authRouter.get("/otp/login", authController.loginOtp);
authRouter.post("/login", authController.login);
authRouter.post("/signin", authController.signin);
authRouter.post("/refreshToken", authController.refreshToken);
module.exports = authRouter;
