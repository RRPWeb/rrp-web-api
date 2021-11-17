const otpService = require('./otp.service');
const userRepo = require('../repositories/user.repo');

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
      return { userId: result.data[0].USER_ID, status: result.data[0].STATUS };
    }

    return { error: 'Some problem occured during login' };
  }

  return { error: 'Entered OTP is invalid or expired' };
};
