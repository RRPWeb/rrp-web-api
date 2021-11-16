
const otpRepo = require('../repositories/otp.repo')
const smsClient =require('../clients/sms.client')
const waClient =require('../clients/whatsapp.client')
const { response } = require('express')
exports.createOtp = async (phoneNumber ,clientIp,validity,type)=> {
  const otp = Math.floor(1000000 + Math.random() * 9000000)
  const result = await otpRepo.createOtp(phoneNumber,clientIp,otp,validity,type)
  phoneNumber = '+91'+phoneNumber
  const otpmsg = 'Your otp for RRP portal is :'+otp
  await waClient.sendMsg(otpmsg,phoneNumber);
  
  return result
}
exports.verifyOtp = async (phoneNumber ,clientIp,otp,type)=> {
  
  const result = await otpRepo.verifyOtp(phoneNumber,clientIp,otp,type)
  if(!result.error){
    console.log(result.data[0].otpRowCount)
    if (result.data[0].otpRowCount==1){
      return true
    }
  }
  
  return false
}