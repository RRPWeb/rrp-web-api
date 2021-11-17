const userRepo = require('../repositories/user.repo');

exports.getAllUsers = async () => {
  
  const response = await userRepo.getUsers()
  console.log(response)
  return response;
  
  
};

