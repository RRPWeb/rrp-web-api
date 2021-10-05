const userInfo = require('../repository/UserInfo');

exports.getAllUsers = async () => {
  let [data,err] = await userInfo.getUsers();
  if(err){
    console.log(err);
    console.log(data)
    return "Error"
  }else{
    console.log(data)
    return "Success"
  }
  
};

