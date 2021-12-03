const jwt = require("jsonwebtoken");
const config = require("../configs/config.json");
const otpService = require("./otp.service");
const userRepo = require("../repositories/user.repo");
let tokenList = [];
exports.login = async (phoneNumber, clientIp, otp, type) => {
  const isOtpValid = await otpService.verifyOtp(
    phoneNumber,
    clientIp,
    otp,
    type
  );

  if (isOtpValid) {
    let result = await userRepo.getUserByPhNum(phoneNumber);
    if (!result.error) {
      let user = {
        userId: result.data[0].USER_ID,
        status: result.data[0].STATUS
      };

      const token = jwt.sign(user, config.secret, {
        expiresIn: config.tokenLife
      });
      const refreshToken = jwt.sign(user, config.refreshTokenSecret, {
        expiresIn: config.refreshTokenLife
      });
      let response = {
        token,
        tokenLife: config.tokenLife,
        refreshToken,
        refreshTokenLife: config.refreshTokenLife
      };
      tokenList.push(refreshToken);
      return response;
    }

    return { error: "Some problem occured during login" };
  }

  return { error: "Entered OTP is invalid or expired" };
};

exports.refreshToken = (refreshTOken) => {
  if (refreshTOken in tokenList) {
    let user = {
      userId: "78996433224456",
      status: "ACTIVE"
    };
    let response;
    const token = jwt.sign(user, config.secret, {
      expiresIn: config.tokenLife
    });
    const refreshTokenNew = jwt.sign(user, config.refreshTokenSecret, {
      expiresIn: config.refreshTokenLife
    });
    response = {
      token,
      tokenLife: config.tokenLife,
      refreshToken: refreshTokenNew,
      refreshTokenLife: config.refreshTokenLife
    };
    tokenList.push(refreshTokenNew);
    tokenList.filter((item) => item !== refreshTOken);
    return response;
  } else {
    return { err: "TOken not valid", tokens: tokenList };
  }
};
