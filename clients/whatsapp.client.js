const accountSid = 'AC03b6aa389f02ab5db03ea074f17e3377'; 
const authToken = 'f1fb04b9d153dec126a506f56f84c5e7'; 
const client = require('twilio')(accountSid, authToken);

exports.sendMsg= async (msg,phNum)=>{
  console.log("in whatsapp client")
  const waNum ='whatsapp:'+phNum
  client.messages
      .create({
         body: msg,
         from: 'whatsapp:+14155238886',  
         to: waNum
       })
      .then(message => console.log(message.sid)).done();
      return 'Success'
}