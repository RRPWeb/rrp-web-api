
const userInfo = require('../repository/UserInfo')
const userService = require('../services/UserInfo.service')
const testMessege = (req,res,next) =>{
    // userInfo.getUsers((err,data)=>{
    //     if(err){
    //         res.status(200).json( "Some error occurred while retrieving customers."
    //           );
    //     }else{
    //         res.status(200).json(data);
    //     }
    // })

    const response = userService.getAllUsers()
    res.status(response.status).json(response.responseData)

    // console.log(userInfo.getUsers())
    //   res.status(200).json("Done")
      
}


module.exports={
    testMessege
}