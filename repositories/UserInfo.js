
const dbHelper =require('./DbHelper')

exports.getUsers = async () => {
  const sql ="SELECT * FROM `lJEpEVWywz`.`USER_INFO`";
  try{
      const response = await dbHelper.execDql(sql)
      console.log(response)
      return response
    }catch(err){
      console.log(err)
      return err
    }
}


