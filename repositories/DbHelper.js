const mysql = require("mysql");
const dbcon = mysql.createPool({
  host: "remotemysql.com",
  user: "lJEpEVWywz",
  password: "I4Ai4A8Jhk"
})

exports.execDql = (sql)=>{
  return new Promise((resolve,reject)=>{
    dbcon.query(sql,(error, rows, fields) => {
      if(error){
        console.log(rows)
        return reject(error)
      }else{
        return resolve(rows)
      }
    })
  })
  
}

