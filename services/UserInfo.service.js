const userInfo = require('../repository/UserInfo');

exports.getAllUsers = async () => {
  let [data,err] = await userInfo.getUsers();
  if(err){
    console.log(err);
    return "Error"
  }else{
    console.log(data)
    return "Success"
  }
  
};

