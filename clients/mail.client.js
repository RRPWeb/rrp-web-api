var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'amit.here1@gmail.com',
    pass: 'Amit@tcs11'
  }
});

var mailOptions = {
  from: 'amit.here1@gmail.com',
  to: 'swetapallavi123@gmail.com',
  subject: 'Sending Email using Node.js Amit',
  text: 'That was easy!'
};
exports.sendMail= async ()=>{
  let msg =''
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    msg = error
  } else {
    console.log('Email sent: ' + info.response);
    msg = info.response
  }
});
return msg
}