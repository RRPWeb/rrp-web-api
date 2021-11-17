
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
    if("ER_DUP_ENTRY"===result.error){
      return {error:'User is already registered'}
    }
    return {error:'Some problem occured during registratio'}
  }
  
  
  return {error: 'Entered OTP is invalid or expired'}
}