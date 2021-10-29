
//Client for fetching fil from other websites and masking that URL
var request = require('request');
exports.getFile = async (fileUrl) => {
  
  return request(fileUrl)
  
};