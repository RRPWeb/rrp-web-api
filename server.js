const express = require('express');
const routes = require('./routes/test'); // import the routes
const logger = require('./middlewares/logger');
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const app = express();
app.use(express.json());

const options= {
  defination:{
    openapi:'3.0.0',
    info:{
      title:'Apis for RRP webportal',
      version:'1.0.0'
    },
    servers:[
      {
        api:'node-rvgxxv--8080.local.webcontainer.io'
      }
    ]
  },
  apis:['./server.js']
}
const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))
app.use(logger);
app.use('/', routes);

// process.env.PORT lets the port be set by Heroku
let port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Our app is running on port :' + port);
});
