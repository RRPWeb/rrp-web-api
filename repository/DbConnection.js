const mysql = require("mysql");
const dbcon = mysql.createPool({
  connectionLimit : 1000,
  connectTimeout  : 60 * 60 * 1000,
  acquireTimeout  : 60 * 60 * 1000,
  timeout         : 60 * 60 * 1000,
  host: "sql6.freesqldatabase.com",
  user: "sql6440358",
  password: "Amit@tcs11"
});

module.exports = dbcon