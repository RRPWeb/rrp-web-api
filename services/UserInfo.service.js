const userInfo = require('../repository/UserInfo');

const getAllUsers = () => {
  userInfo.getUsers((err, data) => {
    if (err) {
      return {
        status: '500',
        responseData: 'Some error occurred while retrieving customers.'
      };
    } else {
     return {
       status:'200',
       responseData: data
     }
    }
  });
};


module.exports={
  getAllUsers
}