
const userService = require('../services/user.service');
exports.userProfiles = (req,res,next) =>{
  const response = await userService.getAllUsers()

  res.status(200).json(response)
}