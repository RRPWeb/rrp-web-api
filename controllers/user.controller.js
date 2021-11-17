
const userService = require('../repositories/user.service');
exports.basicInfo = (req,res,next) =>{
  const response = userService.getAllUsers()
  res.status(200).json(response)
}