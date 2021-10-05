
const dbcon =require('./DbConnection')
const query ="SELECT * FROM `lJEpEVWywz`.`USER_INFO`";

const getUsers = ()=>{
  console.log("Inside getUsers...")
  dbcon.query(query, (err, rows) => {
    if (err) {
      return "Error"
     
    } else {
      return rows[0]
    }
  });
}

module.exports = getUsers
