
const userService = require('../services/user.service');
exports.userProfiles = (req,res,next) =>{
  const response = userService.getAllUsers()
  console.log(' in controller' )
  console.log(response)
  res.status(200).json(response)
}