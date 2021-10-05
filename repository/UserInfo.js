
const dbcon =require('./DbConnection')
const query ="SELECT * FROM `sql6440358`.`USER_INFO`";

const getUsers = ()=>{
  console.log("Inside getUsers...")
  dbcon.query(query, (err, rows) => {
    if (err) {
      console.log(err);
     
    } else {
      console.log(rows);
    }
  });
}

module.exports = getUsers
