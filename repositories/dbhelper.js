const mysql = require("mysql");
const dbcon = mysql.createPool({
  host: "remotemysql.com",
  user: "lJEpEVWywz",
  password: "I4Ai4A8Jhk"
})

exports.execDql = (sql,parameters=[])=>{
  return new Promise((resolve,reject)=>{
    dbcon.query(sql,parameters,(error, rows, fields) => {
      if(error){
        console.log( error)
        return reject(error.code)
      }else{
        return resolve(rows)
      }
    })
  }) 
}
exports.execDml = (sql,parameters)=>{
  return new Promise((resolve,reject)=>{
    dbcon.query(sql,parameters,(error, rows, fields) => {
      if(error){
        console.log('The error code is :'+ error.code)
        return reject(error.code)
      }else{
        return resolve(rows)
      }
    })
  }) 
}
