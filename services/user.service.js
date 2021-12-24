const userRepo = require("../repositories/user.repo");
const gdriveClient = require("../clients/gdrive.client");
exports.getAllUsers = async () => {
  const response = await userRepo.getUsers();
  return response;
};

exports.photoUpload = async (profilePhoto) => {
  // const response = gdriveClient.uploadFile(profilePhoto);
  // return response;
  return profilePhoto.tempFilePath;
};
