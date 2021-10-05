const userInfo = require('../repository/UserInfo');

exports.getAllUsers = async () => {
  let response = await userInfo.getUsers();
  console.log(response)
  return response;
};

