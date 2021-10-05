
const userInfo = require('../repository/UserInfo')
const testMessege = (req,res,next) =>{
    console.log(userInfo.getUsers())
      res.status(200).json("Done")
      
}


module.exports={
    testMessege
}