
const otpService = require('./otp.service')
const userRepo = require('../repositories/user.repo')

exports.signup = async (phoneNumber ,clientIp,otp,type)=> {
  
  const isOtpValid = await otpService.verifyOtp(phoneNumber,clientIp,otp,type)
  let result = isOtpValid // just for teting 
  //call the signup repo or user repo to save user data 
  
  return result
}