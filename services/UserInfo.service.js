const userInfo = require('../repository/UserInfo');

exports.getAllUsers = async () => {
  
  const response = await userInfo.getUsers()
  return response;
  
  
};

