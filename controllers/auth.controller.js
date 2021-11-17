const jwt = require('jsonwebtoken')
const tokenList = []
const config = require('../configs/config.json')
const otpSevice = require('../services/otp.service')
const signupSevice = require('../services/signup.service')
var get_ip = require('ipware')().get_ip;

exports.signinOtp = async (req,res,next) =>{
  const  clientIp = get_ip(req).clientIp

  const phNum = req.query.phoneNumber

  let response = await otpSevice.createOtp(phNum,clientIp,config.tokenLife,'SIGNUP')

  res.status(200).json(response)

}
exports.loginOtp = async (req,res,next) =>{
  const  clientIp = get_ip(req).clientIp

  const phNum = req.query.phoneNumber
  let response = await otpSevice.createOtp(phNum,clientIp,config.tokenLife,'LOGIN')
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

exports.signin = async (req,res,next) => {
  const {name,userPhoneNum,voterId,otp,ageQualifier,isGovtEmployee} = req.body;
  const  clientIp = get_ip(req).clientIp
  const response = await signupSevice.signup(userPhoneNum,voterId,name,clientIp,otp,'SIGNUP')
  res.status(201).json(response);
}
