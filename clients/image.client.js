
var request = require('request');
exports.getImage = async (req,res) => {
  
  const imageUrl = 'https://i.picsum.photos/id/574/300/300.jpg?hmac=D8e1xkNmWFV7sZNtVa8nLzgusD4LendI-0RSMXM86wk';
        req.pipe(request(imageUrl)).pipe(res);
  
  
};