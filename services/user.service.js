const userRepo = require("../repositories/user.repo");
const gdriveClient = require("../clients/gdrive.client");
//constants
const GDRIVE_USER_PROFILE_FOLDER_ID = "1vqyXxCtczOwblrCFiCxD5ExJ2smbaYLV";
exports.getAllUsers = async () => {
  const response = await userRepo.getUsers();
  return response;
};

exports.photoUpload = async (profilePhoto) => {
  const response = gdriveClient.uploadFile(
    profilePhoto.name,
    profilePhoto.mimetype,
    profilePhoto.tempFilePath,
    GDRIVE_USER_PROFILE_FOLDER_ID
  );
  return response;
};
