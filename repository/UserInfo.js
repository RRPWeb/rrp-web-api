
const dbcon =require('./DbConnection')
const query ="SELECT * FROM `lJEpEVWywz`.`USER_INFO`";

const execDql = ()=>{
  return new Promise((resolve,reject)=>{
    dbcon.query(query,(error, rows, fields) => {
      if(error){
        return reject(error)
      }else{
        console.log(rows)
        return resolve(rows)
      }
    })
  })
  
}

exports.getUsers = async () => {
  try{
      const response = await execDql()
      console.log(response)
      return response
    }catch(err){
      console.log(err)
      return err
    }
}


