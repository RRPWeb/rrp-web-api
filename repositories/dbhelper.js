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
        console.log(rows)
        return reject(error)
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
        console.log(rows)
        return reject(error)
      }else{
        return resolve(rows)
      }
    })
  }) 
}