const userService = require("../services/user.service");
exports.userProfiles = async (req, res, next) => {
  const response = await userService.getAllUsers();
  res.status(200).json(response);
};
exports.photoUpload = async (req, res, next) => {
  const response = await userService.photoUpload(req.files.profilePhoto);
  res.status(200).json(response);
};
