
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

    let [data,err] = await userService.getAllUsers()
    if (err) {
        console.log("encountered err",err);
        res.status(500).json("Error ")
      }else{
        console.log(rolledcheck)
        res.status(200).json(data)
      }
      

    // console.log(userInfo.getUsers())
    //   res.status(200).json("Done")
      
}

