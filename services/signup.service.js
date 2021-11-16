
const otpService = require('./otp.service')
const userRepo = require('../repositories/user.repo')

exports.signup = async (phoneNumber,voterId,name,clientIp,otp,type)=> {
  
  const isOtpValid = await otpService.verifyOtp(phoneNumber,clientIp,otp,type)
  
  if(isOtpValid){
    const secondsSinceEpoch = Math.round(Date.now() / 1000)
    const prefix = Math.floor(100 + Math.random() * 900)
    const postfix = Math.floor(100 + Math.random() * 900)
    const userId = ''+prefix+secondsSinceEpoch+postfix
    let result = await userRepo.createUser(userId,phoneNumber,voterId,name)
    if(!result.error){
      return {messege: 'User is registered sucessfully'}
    }
    console.log(result.error.cod)
    return {error: 'Error occured while creating user'}
  }
  
  
  return {error: 'Entered OTP is invalid or expired'}
}