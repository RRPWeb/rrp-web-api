
const dbHelper =require('./dbhelper')

exports.getUsers = async () => {
  const sql ="SELECT * FROM `lJEpEVWywz`.`USER_PROFILE`";
  try{
      let response = await dbHelper.execDql(sql)
      //response = JSON.parse(JSON.stringify(response))
     
      return {data: response}
    }catch(err){
      
      return  {error : err}
    }
}


