const userInfo = require('../repository/UserInfo');

const getAllUsers = () => {
  let status,responseData
  userInfo.getUsers((err, data) => {
    if (err) {
        status= '500',
        responseData= 'Some error occurred while retrieving customers.'
     
    } else {
      status= '200',
      responseData= data
     
    }
  });

  return {status,responseData}
};


module.exports={
  getAllUsers
}