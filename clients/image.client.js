
var request = require('request');
exports.getImage = async () => {
  
  const imageUrl = 'https://i.picsum.photos/id/574/300/300.jpg?hmac=D8e1xkNmWFV7sZNtVa8nLzgusD4LendI-0RSMXM86wk';
  
  return request(imageUrl)
  
  
};