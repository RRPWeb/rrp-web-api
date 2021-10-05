const mysql = require("mysql");
const dbcon = mysql.createPool({
  host: "sql6.freesqldatabase.com",
  user: "sql6440358",
  password: "Amit@tcs11"
});

module.exports = dbcon