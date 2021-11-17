
const dbHelper =require('./dbhelper')

exports.getUsers = async () => {
  const sql ="SELECT * FROM `lJEpEVWywz`.`USER_PROFILE`";
  try{
      let response = await dbHelper.execDql(sql)
      response = response.map(row => (row.package = JSON.parse(row.package), row))
      console.log(response)
      return response
    }catch(err){
      
      return  {error : err}
    }
}


