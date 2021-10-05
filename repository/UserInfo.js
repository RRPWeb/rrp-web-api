
const dbcon =require('./DbConnection')
const query ="SELECT * FROM `lJEpEVWywz`.`USER_INFO`";

exports.getUsers = async ()=>{
  console.log("Inside getUsers...")
  return await dbcon.query(query, (err, rows) => {
    if (err) {
     console.log(err)
     return "Error"
    } else {
      console.log(rows)
      return "Success"
    }
  });
}


