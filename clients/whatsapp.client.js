const accountSid = "AC03b6aa389f02ab5db03ea074f17e3377";
const authToken = "b4be6d57ed3e7bb87346e1324919be40";
const client = require('twilio')(accountSid, authToken);

exports.sendWaMsg= ()=>{
  client.messages
      .create({
         body: 'Hello there from twilio!',
         to: 'whatsapp:+919094763431'
       })
      .then(message => console.log(message.sid));
      return 'Success'
}