
const dbcon =require('./DbConnection')
const query ="SELECT * FROM `lJEpEVWywz`.`USER_INFO`";

const getUsers = ()=>{
  console.log("Inside getUsers...")
  dbcon.query(query, (err, rows) => {
    if (err) {
      console.log("Error")
     
    } else {
      console.log(rows)
    }
  });
}

module.exports = getUsers
