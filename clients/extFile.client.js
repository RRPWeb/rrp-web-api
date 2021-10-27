
//Client for fetching fil from other websites and masking that URL
var request = require('request');
exports.getImage = async (fileUrl) => {
  
  return request(fileUrl)
  
};