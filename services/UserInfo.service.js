const userInfo = require('../repository/UserInfo');

exports.getAllUsers = async () => {
  const response = await userInfo.getUsers((err, data) => {
    if (err) {
      return {
        status: '500',
        responseData: 'Some error occurred while retrieving customers.'
      };
    } else {
      return { status: '200', responseData: data };
    }
  });
  console.log(response)
  return response;
};

