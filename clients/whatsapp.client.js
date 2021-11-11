const accountSid = 'AC03b6aa389f02ab5db03ea074f17e3377'; 
const authToken = '[Redacted]'; 
const client = require('twilio')(accountSid, authToken);

exports.sendMsg= async ()=>{
  client.messages
      .create({
         body: 'Hello there from twilio!',
         from: 'whatsapp:+14155238886',  
         to: 'whatsapp:+918820904591'
       })
      .then(message => console.log(message.sid)).done();
      return 'Success'
}