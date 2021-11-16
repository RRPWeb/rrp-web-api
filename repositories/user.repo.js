
const dbHelper =require('./dbhelper')

exports.createUser = async (userId,phoneNumber ,voterId,name) => {
  const sql ="INSERT INTO `lJEpEVWywz`.`USER_PROFILE` (`USER_ID`,`PHONE_NUM`, `VOTER_ID`, `NAME`,`CREATED_AT`,`UPDATED_AT`) VALUES (?,?, ?, ?,CURRENT_TIME(),CURRENT_TIME()) ";
  
  const parameters = [userId,phoneNumber,voterId,name]
  try{
      const response = await dbHelper.execDml(sql,parameters)
      console.log(response)
      return {data : response}
    }catch(err){
      console.log(err)
      return  {error : err}
    }
}