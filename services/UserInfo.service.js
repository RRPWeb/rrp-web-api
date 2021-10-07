const userInfo = require('../repositories/UserInfo');

exports.getAllUsers = async () => {
  
  const response = await userInfo.getUsers()
  return response;
  
  
};

