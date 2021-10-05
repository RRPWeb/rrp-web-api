
const getUsers = require('../repository/UserInfo')
const testMessege = (req,res,next) =>{
    console.log(getUsers())
      res.status(200).json("Done")
      
}


module.exports={
    testMessege
}