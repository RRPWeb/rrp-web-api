const accountSid = "AC03b6aa389f02ab5db03ea074f17e3377";
const authToken = "f1fb04b9d153dec126a506f56f84c5e7";
const client = require('twilio')(accountSid, authToken);

exports.sendsms= async (msg,phNum)=>{
  phNum ='+918820904591'
  
  client.messages
      .create({
        body: msg,
        messagingServiceSid: "MG95bc3e1d2a35bf561e26a1b126986904",
        to: phNum,
       })
      .then(message => console.log(message.sid));
      return 'Success'
}