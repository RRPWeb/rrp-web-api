const userInfo = require('../repository/UserInfo');

exports.getAllUsers = async () => {
  let response = await userInfo.getUsers((err, data) => {
    if (err) {
      console.log(err)
      return {
        status: '500',
        responseData: 'Some error occurred while retrieving customers.'
      };
    } else {
      console.log(data)
      return { status: '200', responseData: data };
    }
  });
  console.log(response)
  return response;
};

