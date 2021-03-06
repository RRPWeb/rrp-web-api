const jwt = require("jsonwebtoken");
const authconfig = require("../configs/auth.config.json");
const otpService = require("./otp.service");
const userRepo = require("../repositories/user.repo");
let tokenList = {};
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

      const token = jwt.sign(user, authconfig.secret, {
        expiresIn: authconfig.tokenLife
      });
      const refreshToken = jwt.sign(user, authconfig.refreshTokenSecret, {
        expiresIn: authconfig.refreshTokenLife
      });
      let response = {
        token,
        tokenLife: authconfig.tokenLife,
        refreshToken,
        refreshTokenLife: authconfig.refreshTokenLife
      };
      tokenList[refreshToken] = new Date();
      return response;
    }

    return { error: "Some problem occured during login" };
  }

  return { error: "Entered OTP is invalid or expired" };
};

exports.refreshToken = (user, refreshToken) => {
  if (refreshToken in tokenList) {
    console.log(user);
    const token = jwt.sign(user, authconfig.secret, {
      expiresIn: authconfig.tokenLife
    });
    const refreshTokenNew = jwt.sign(user, authconfig.refreshTokenSecret, {
      expiresIn: "15m"
    });
    let response = {
      token,
      tokenLife: authconfig.tokenLife,
      refreshToken: refreshTokenNew,
      refreshTokenLife: authconfig.refreshTokenLife
    };
    tokenList[refreshTokenNew] = new Date();
    delete tokenList[refreshToken];
    return response;
  } else {
    return { err: "Refresh token not valid", tokens: tokenList };
  }
};

exports.logout = (refreshToken) => {
  if (tokenList.includes(refreshToken)) {
    delete tokenList[refreshToken];
    Object.keys(tokenList)
      .filter((key) => new Date() - tokenList.key > 1800)
      .forEach((key) => delete tokenList[key]);
    return { messege: "User successfully logged out" };
  } else {
    return { err: "Refresh token not valid", tokens: tokenList };
  }
};
