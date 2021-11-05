exports.basicInfo = (req,res,next) =>{
  const response = {
    messege : 'Successful operation'
  }
  res.status(200).json(response)
}