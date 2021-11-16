
const dbHelper =require('./dbhelper')

exports.createOtp = async (phoneNumber ,clientIp,otp,validity,type) => {
  const sql ="INSERT INTO `lJEpEVWywz`.`OTP` (`PHONE_NUM`, `IP_ADDRESS`, `OTP`, `TYPE`, `CREATED_AT`, `EXPIRES_AT`) VALUES (?,?, ?, ?,CURRENT_TIME(),DATE_ADD(CURRENT_TIME(), INTERVAL ? MINUTE)) ";
  validity =5;
  const parameters = [phoneNumber,clientIp,otp,type,validity]
  try{
      const response = await dbHelper.execDml(sql,parameters)
      console.log(response)
      return {data : response}
    }catch(err){
      console.log(err)
      return  {error : err}
    }
}

exports.verifyOtp = async (phoneNumber ,clientIp,otp,type) => {
  const sql ="SELECT COUNT(*) AS otpRowCount FROM `lJEpEVWywz`.`OTP` WHERE `PHONE_NUM`=? AND `IP_ADDRESS` =? AND `OTP`=? AND `TYPE`=? AND `EXPIRES_AT`>CURRENT_TIME() AND `USED`='FALSE'";

  const parameters = [phoneNumber,clientIp,otp,type]
  try{
      const response = await dbHelper.execDql(sql,parameters)
      console.log(response)
      return {data : response}
    }catch(err){
      console.log(err)
      return {error : err}
    }
}