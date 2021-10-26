exports.signinOtp =  (req,res,next) =>{
  let response = {
    otp: '12387612',
    purpose: 'registration',
    validity: '15min'
  }
  res.status(200).json(response)

}