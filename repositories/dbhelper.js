const mysql = require("mysql");
const appenv = require("../configs/appenv.config")
const dbcon = mysql.createPool(appenv.dbconfig.dburl)

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
