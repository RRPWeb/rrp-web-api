
const dbcon =require('./DbConnection')
const query ="SELECT * FROM `lJEpEVWywz`.`USER_INFO`";



module.exports = {
  getUsers: function() {
    console.log("Inside getUsers...")
    dbcon.query(query, (err, rows) => {
      if (err) {
        return "Error"
       
      } else {
        return rows[0]
      }
    });
  }
}
