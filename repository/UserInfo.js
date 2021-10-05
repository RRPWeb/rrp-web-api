
const dbcon =require('./DbConnection')
const query ="SELECT * FROM `lJEpEVWywz`.`USER_INFO`";

const getUsers = ()=>{
  console.log("Inside getUsers...")
  dbcon.query(query, (err, rows) => {
    if (err) {
      return "error"
     
    } else {
      return rows
    }
  });
}

module.exports = getUsers
