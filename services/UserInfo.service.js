const userInfo = require('../repository/UserInfo');

exports.getAllUsers = async () => {
  let [err,data] = await userInfo.getUsers();
  if(err){
    console.log(err);
    return "Error"
  }else{
    console.log(data)
    return "Success"
  }
  
};

