const urlRepo = require('../repositories/url.repo')

exports.getFileId = async (filename) => {
    const response = await urlRepo.getFileId(filename);
    return response;
  };