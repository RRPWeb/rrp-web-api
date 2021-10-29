const jwt = require('jsonwebtoken')
const tokenList = {}
const config = require('../config/config.json')

exports.signinOtp =  (req,res,next) =>{
  let response = {
    messege: 'success'
  }
  res.status(200).json(response)

}
exports.loginOtp =  (req,res,next) =>{
  let response = {
    messege: 'success'
  }
  res.status(200).json(response)

}

exports.login = (req,res,next) => {
  const {userPhoneNum,password} = req.body;
  const accessLevel = 'member'
  const user = {
      userPhoneNum ,
      accessLevel
    }
  // do the database authentication here, with user name andpassword combination.
  const token = jwt.sign(user, config.secret, { expiresIn:config.tokenLife})
  const refreshToken = jwt.sign(user, config.refreshTokenSecret,{ expiresIn: config.refreshTokenLife})
  const response = {
      token,
      refreshToken
  }
  tokenList[refreshToken] = response
  res.status(200).json(response);
}
