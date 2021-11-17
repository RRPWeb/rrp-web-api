
const dbHelper =require('./dbhelper')

exports.getUsers = async () => {
  const sql ="SELECT * FROM `lJEpEVWywz`.`USER_PROFILE`";
  try{
      let response = await dbHelper.execDql(sql)
      return {data: response}
    }catch(err){
      
      return  {error : err}
    }
}


