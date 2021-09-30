var express = require('express');
var app = express();
app.use(express.json());

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get("/api/test",(req,res)=>{
  res.status(200).json("Hi")
})


app.listen(port, function() {
    console.log('Our app is running on port :' + port);
})