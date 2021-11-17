
const dbHelper =require('./dbhelper')

exports.getUsers = async () => {
  const sql ="SELECT * FROM `lJEpEVWywz`.`USER_PROFILE`";
  try{
      let response = await dbHelper.execDql(sql)
      response = JSON.parse(JSON.stringify(response))
      console.log(response)
      return response
    }catch(err){
      
      return  {error : err}
    }
}


