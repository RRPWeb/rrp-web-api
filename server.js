const express = require ('express');
const routes = require('./routes/test'); // import the routes

const app = express();

app.use(express.json());

app.use('/', routes);

// process.env.PORT lets the port be set by Heroku

app.listen(process.env.PORT || 8080, function() {
    console.log('Our app is running on port :' + port);
})