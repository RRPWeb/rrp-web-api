
const userService = require('../services/UserInfo.service')
exports.testMessege = async (req,res,next) =>{
    let response = await userService.getAllUsers()
    res.status(200).json(response)

}

