
const getUsers = require('../repository/UserInfo')
const testMessege = (req,res,next) =>{
    getUsers()
      res.status(200).json("Done")
      
}


module.exports={
    testMessege
}