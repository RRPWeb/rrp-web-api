const express = require("express");
const YAML = require("yamljs");
const swaggerUi = require("swagger-ui-express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const OpenApiValidator = require("express-openapi-validator");
const fileUpload = require("express-fileupload");
const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/user.route");
const routes = require("./routes/test"); // import the routes
const authValidator = require("./middlewares/authvalidator");

const apiSpec = YAML.load("spec.yml");
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
//app.use(limiter);
// app.use(
//   OpenApiValidator.middleware({
//     apiSpec: './spec.yml'
//   }),
// );
app.use((err, req, res, next) => {
  console.error(err); // dump error to console for debug
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors
  });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiSpec));
app.use(fileUpload());

app.get("/", (req, res) => {
  res.status(200).json(apiSpec);
});

app.use("/", routes);
app.use("/auth/", authRoutes);
//app.use("/user/", authValidator, userRoutes);
app.use("/user/", userRoutes);

// process.env.PORT lets the port be set by Heroku
let port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("Our app is running on port :" + port);
});
