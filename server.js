const express = require('express');
const YAML = require('yamljs');
const routes = require('./routes/test'); // import the routes
const logger = require('./middlewares/logger');
const swaggerUi = require('swagger-ui-express');
const apiSpec = YAML.load('spec.yml');
// const spec = path.join(__dirname, 'spec.yml');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const OpenApiValidator = require('express-openapi-validator');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(helmet());
app.use(cors());
app.use(limiter);
app.use('/', express.static(apiSpec));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiSpec));
app.use(logger);
// app.get('/', (req, res) => {
//   res.status(200).json(apiSpec);
// });

app.use('/', routes);

// process.env.PORT lets the port be set by Heroku
let port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Our app is running on port :' + port);
});
