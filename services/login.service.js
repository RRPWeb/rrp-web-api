const jwt = require('jsonwebtoken')
const config = require('../configs/config.json')
const otpService = require('./otp.service');
const userRepo = require('../repositories/user.repo');
let tokenList = []
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
        status: result.data[0].STATUS,
      };

      const token = jwt.sign(user, config.secret, {
        expiresIn: config.tokenLife,
      });
      const refreshToken = jwt.sign(user, config.refreshTokenSecret, {
        expiresIn: config.refreshTokenLife,
      });
      let response = {
        token,
        refreshToken,
      };
      tokenList[refreshToken] = response;
      return response
    }

    return { error: 'Some problem occured during login' };
  }

  return { error: 'Entered OTP is invalid or expired' };
};
