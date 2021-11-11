
var request = require('request');
const userService = require('../services/UserInfo.service')
const imageClient = require('../clients/extFile.client')
const waClient =require('../clients/whatsapp.client')
exports.testMessege = async (req,res,next) =>{
    //image proxy ********************
    // let response = await userService.getAllUsers()
    // res.status(200).json(response)
    // const imageUrl = 'https://i.picsum.photos/id/574/300/300.jpg?hmac=D8e1xkNmWFV7sZNtVa8nLzgusD4LendI-0RSMXM86wk';
    //     req.pipe(request(imageUrl)).pipe(res);

    //pdf proxy ***********************
    // const imageUrl = 'https://legislative.gov.in/sites/default/files/coi-4March2016.pdf';
    // let image = await imageClient.getFile(imageUrl)

    // req.pipe(image).pipe(res);
    let msg = await waClient.sendWaMsg();

    res.status(200).json(msg)
}

