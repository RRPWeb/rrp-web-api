const express = require ('express');
const routes = require('./routes/test'); // import the routes

const app = express();

app.use(express.json());

app.use('/', routes);

// process.env.PORT lets the port be set by Heroku
let port = process.env.PORT || 8080
app.listen(port, function() {
    console.log('Our app is running on port :' + port);
})