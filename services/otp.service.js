
const otpRepo = require('../repositories/otp.repo')
const userRepo = require('../repositories/user.repo')
const smsClient =require('../clients/sms.client')
const waClient =require('../clients/whatsapp.client')

const saveAndSendOtp= async (phoneNumber ,clientIp,validity,type)=>{
  const otp = Math.floor(1000000 + Math.random() * 9000000)
  const result = await otpRepo.createOtp(phoneNumber,clientIp,otp,validity,type)
  phoneNumber = '+91'+phoneNumber
  const otpmsg = 'Your otp for RRP portal is :'+otp + 'valid for next '+validity+' minutes.'
  await waClient.sendMsg(otpmsg,phoneNumber);
  return result;
}
exports.createOtp = async (phoneNumber ,clientIp,validity,type)=> {
  const userInfo= await userRepo.getUserByPhNum(phoneNumber)
  console.log(userInfo.data)
  if((userInfo.data && type==='SIGNUP')||(!userInfo.data && type==='LOGIN')){
    return await saveAndSendOtp(phoneNumber ,clientIp,validity,type)
  }else{
    return {error : 'Operation not allowed'}
  }
}
exports.verifyOtp = async (phoneNumber ,clientIp,otp,type)=> {
  
  const result = await otpRepo.verifyOtp(phoneNumber,clientIp,otp,type)
  if(!result.error){
    if (result.data[0].otpRowCount==1){
      return true
    }
  }
  
  return false
}