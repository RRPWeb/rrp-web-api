
const dbcon =require('./DbConnection')
const query ="SELECT * FROM `lJEpEVWywz`.`USER_tINFO`";

exports.getUsers = ()=>{
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


