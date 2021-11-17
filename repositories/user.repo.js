
const dbHelper =require('./dbhelper')

exports.getUsers = async () => {
  const sql ="SELECT * AS data FROM `lJEpEVWywz`.`USER_PROFILE`";
  try{
      const response = await dbHelper.execDql(sql)
      console.log(response)
      return {data : response}
    }catch(err){
      console.log(er)
      return  {error : err}
    }
}


