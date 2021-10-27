
var request = require('request');
exports.getImage = async () => {
  
  const imageUrl = 'https://legislative.gov.in/sites/default/files/coi-4March2016.pdf';
  
  return request(imageUrl)
  
  
};