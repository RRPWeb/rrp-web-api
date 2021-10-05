
const dbcon =require('./DbConnection')
const query ="SELECT * FROM `sql6440358`.`USER_INFO`";

const getUsers = ()=>{
  console.log("Inside getUsers...")
  dbcon.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json('Error while saving OTP in DB  occured !!');
    } else {
      console.log(rows);
    }
  });
}

module.exports = getUsers
