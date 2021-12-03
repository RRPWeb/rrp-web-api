const jwt = require("jsonwebtoken");
const config = require("../configs/config.json");
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, config.secret, (err, user) => {
      if (err) {
        return res.status(401).json("Token is not valid");
      }
      req.body.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not authenticated!!");
  }
};

module.exports = verifyToken;
