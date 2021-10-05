const express = require('express');
const YAML = require('yamljs');
const routes = require('./routes/test'); // import the routes
const logger = require('./middlewares/logger');
const swaggerUi = require('swagger-ui-express');
const apiSpec = YAML.load('spec.yml');


const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(logger);
app.get('/',(req,res) =>{
  res.status(200).json(apiSpec)
})
app.use('/', routes);

// process.env.PORT lets the port be set by Heroku
let port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Our app is running on port :' + port);
});

