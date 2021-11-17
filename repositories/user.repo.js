
const dbHelper =require('./dbhelper')

exports.getUsers = async () => {
  const sql ="SELECT * FROM `lJEpEVWywz`.`USER_PROFILE`";
  try{
      const response = await dbHelper.execDql(sql)
      console.log(response)
      return response
    }catch(err){
      
      return  {error : err}
    }
}


