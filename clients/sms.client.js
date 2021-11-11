const accountSid = "AC03b6aa389f02ab5db03ea074f17e3377";
const authToken = "b4be6d57ed3e7bb87346e1324919be40";
const client = require('twilio')(accountSid, authToken);

exports.sendsms= async ()=>{
  const phNum ='+918820904591'
  const smstext = "Your login OTP in RTR PORTAL for the day is : "
  console.log("In sms client")
  client.messages
      .create({
        body: smstext,
        messagingServiceSid: "MG95bc3e1d2a35bf561e26a1b126986904",
        to: phNum,
       })
      .then(message => console.log(message.sid));
      return 'Success'
}