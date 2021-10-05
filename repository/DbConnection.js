const mysql = require("mysql");
const dbcon = mysql.createPool({
  host: "remotemysql.com",
  user: "lJEpEVWywz",
  password: "I4Ai4A8Jhk"
});

module.exports = dbcon