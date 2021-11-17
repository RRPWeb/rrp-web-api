
const dbHelper =require('./dbhelper')

exports.getUsers = async () => {
  const sql ="SELECT * FROM `lJEpEVWywz`.`USER_PROFILE`";
  try{
      const response = await dbHelper.execDql(sql)
      
      return response.data
    }catch(err){
     
      return err
    }
}


