
const otpService = require('./otp.service')
const userRepo = require('../repositories/user.repo')

exports.signup = async (phoneNumber,voterId,name,clientIp,otp,type)=> {
  
  const isOtpValid = await otpService.verifyOtp(phoneNumber,clientIp,otp,type)
  let result = isOtpValid // just for teting 
  //call the signup repo or user repo to save user data 
  const secondsSinceEpoch = Math.round(Date.now() / 1000)
  const prefix = Math.floor(100 + Math.random() * 900)
  const postfix = Math.floor(100 + Math.random() * 900)
  const userId = ''+prefix+secondsSinceEpoch+postfix
  await userRepo.createUser(userId,phoneNumber,voterId,name)
  
  return result
}