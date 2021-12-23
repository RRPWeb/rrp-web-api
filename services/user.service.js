const userRepo = require("../repositories/user.repo");

exports.getAllUsers = async () => {
  const response = await userRepo.getUsers();
  return response;
};

exports.photoUpload = async (profilePhoto) => {
  const response = profilePhoto.name;
  console.log(response);
  return response;
};
