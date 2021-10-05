
const dbcon =require('./DbConnection')
const query ="SELECT * FROM `lJEpEVWywz`.`USER_INFO`";

const getUsers = (result)=>{
  console.log("Inside getUsers...")
  dbcon.query(query, (err, rows) => {
    if (err) {
      result(null, err);
     
    } else {
      result(null, rows)
    }
  });
}

exports.getUsers = getUsers
