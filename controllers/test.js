
const getUsers = require('../repository/UserInfo')
const testMessege = (req,res,next) =>{
      res.status(200).json("Hello")
     
}


module.exports={
    testMessege
}