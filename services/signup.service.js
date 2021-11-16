
const otpService = require('./otp.service')


exports.signup = async (phoneNumber ,clientIp,otp,type)=> {
  
  const result = await otpService.verifyOtp(phoneNumber,clientIp,otp,type)
  
  return result
}