var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'swetapallavi123@gmail.com',
    pass: 'pooja625'
  }
});

var mailOptions = {
  from: 'swetapallavi123@gmail.com',
  to: 'amit.here1@gmail.com',
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