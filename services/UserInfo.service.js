const userInfo = require('../repository/UserInfo');

exports.getAllUsers = async () => {
  try{
  const response = await userInfo.getUsers();
  console.log(response)
  return response
  }catch(err){
    console.log(err)
    return err
  }
  
  
};

