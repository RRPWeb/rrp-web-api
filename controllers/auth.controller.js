const config = require("../configs/config.json");
const otpSevice = require("../services/otp.service");
const signupSevice = require("../services/signup.service");
const loginSevice = require("../services/login.service");
var get_ip = require("ipware")().get_ip;

exports.signinOtp = async (req, res, next) => {
  const clientIp = get_ip(req).clientIp;

  const phNum = req.query.phoneNumber;

  let response = await otpSevice.createOtp(
    phNum,
    clientIp,
    config.tokenLife,
    "SIGNUP"
  );

  res.status(200).json(response);
};
exports.loginOtp = async (req, res, next) => {
  const clientIp = get_ip(req).clientIp;

  const phNum = req.query.phoneNumber;
  let response = await otpSevice.createOtp(
    phNum,
    clientIp,
    config.tokenLife,
    "LOGIN"
  );
  res.status(200).json(response);
};

exports.login = async (req, res, next) => {
  const clientIp = get_ip(req).clientIp;
  const { userPhoneNum, otp } = req.body;

  const response = await loginSevice.login(
    userPhoneNum,
    clientIp,
    otp,
    "LOGIN"
  );
  res.status(200).json(response);
};

exports.signin = async (req, res, next) => {
  const {
    name,
    userPhoneNum,
    voterId,
    otp,
    ageQualifier,
    isGovtEmployee
  } = req.body;
  const clientIp = get_ip(req).clientIp;
  const response = await signupSevice.signup(
    userPhoneNum,
    voterId,
    name,
    clientIp,
    otp,
    "SIGNUP"
  );
  res.status(201).json(response);
};

exports.refreshToken = (req, res, next) => {
  const user = {
    userId: req.body.user.userId,
    status: req.body.user.status
  };
  let response = loginSevice.refreshToken(user, req.body.refreshToken);

  res.status(200).json(response);
};
