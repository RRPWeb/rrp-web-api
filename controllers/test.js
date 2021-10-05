
const getUsers = require('../repository/UserInfo')
const testMessege = (req,res,next) =>{
      res.status(200).json("Hello")
      getUsers()
}


module.exports={
    testMessege
}