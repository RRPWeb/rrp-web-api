const express = require('express');
const YAML = require('yamljs');
const routes = require('./routes/test'); // import the routes
const logger = require('./middlewares/logger');
const swaggerUi = require('swagger-ui-express');
const apiSpec = YAML.load('spec.yml');
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

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiSpec));
app.use(logger);
app.get('/',(req,res) =>{
  res.status(200).json(apiSpec)
})

app.get("/api/test",(req,res) => {
  const query="SELECT COUNT(*) as otpCount FROM `sql6440358`.`USER_OTP`"
  con.query(query,(err,data) => {
    if(err){
      console.log(err)
    }else{
      console.log(data)
    }
  })
})
app.use('/', routes);



// process.env.PORT lets the port be set by Heroku
let port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Our app is running on port :' + port);
});

