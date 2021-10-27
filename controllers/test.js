
var request = require('request');
const userService = require('../services/UserInfo.service')
const imageClient = require('../clients/image.client')
exports.testMessege = async (req,res,next) =>{
    // let response = await userService.getAllUsers()
    // res.status(200).json(response)
    // const imageUrl = 'https://i.picsum.photos/id/574/300/300.jpg?hmac=D8e1xkNmWFV7sZNtVa8nLzgusD4LendI-0RSMXM86wk';
    //     req.pipe(request(imageUrl)).pipe(res);
    await imageClient.getImage(req,res)

}

