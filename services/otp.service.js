
const otpRepo = require('../repositories/otp.repo')
exports.createOtp = async (phoneNumber ,clientIp,validity,type)=> {
  const otp = Math.floor(1000000 + Math.random() * 9000000)
  const result = await otpRepo.createOtp(phoneNumber,clientIp,otp,validity,type)
  
  return result
}