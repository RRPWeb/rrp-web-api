const swaggerSpec = YAML.load('../spec.yml');

const testMessege = (req,res,next) =>{
      res.status(200).json("Hello")
}

const specResponse = (req,res) =>{
    res.status(200).json(swaggerSpec)
}

module.exports={
    testMessege,
    specResponse
}