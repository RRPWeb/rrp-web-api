const userRepo = require('../repositories/user.repo');

exports.getAllUsers = async () => {
  
  const response = await userRepo.getUsers()
 
  return response;
  
  
};

