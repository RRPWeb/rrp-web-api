
const dbHelper =require('./dbhelper')

exports.createUser = async (userId,phoneNumber ,voterId,name) => {
  const sql ="INSERT INTO `lJEpEVWywz`.`USER_PROFILE` (`USER_ID`,`PHONE_NUM`, `VOTER_ID`, `NAME`,`CREATED_AT`,`UPDATED_AT`) VALUES (?,?, ?, ?,CURRENT_TIME(),CURRENT_TIME()) ";
  
  const parameters = [userId,phoneNumber,voterId,name]
  try{
      const response = await dbHelper.execDml(sql,parameters)
      return {data : response}
    }catch(err){
      return  {error : err}
    }
}
exports.getUserByPhNum = async (phoneNumber) => {
  const sql ="SELECT * FROM `lJEpEVWywz`.`USER_PROFILE` WHERE `PHONE_NUM`=?";
  
  const parameters = [phoneNumber]
  try{
      const response = await dbHelper.execDql(sql,parameters)
      return {data : response}
    }catch(err){
      return  {error : err}
    }
}