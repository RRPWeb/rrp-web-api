
const userInfo = require('../repository/UserInfo')
const userService = require('../services/UserInfo.service')
exports.testMessege = async (req,res,next) =>{
    // userInfo.getUsers((err,data)=>{
    //     if(err){
    //         res.status(200).json( "Some error occurred while retrieving customers."
    //           );
    //     }else{
    //         res.status(200).json(data);
    //     }
    // })

    let response = await userService.getAllUsers()
    
      res.status(200).json(response)
      

    // console.log(userInfo.getUsers())
    //   res.status(200).json("Done")
      
}

