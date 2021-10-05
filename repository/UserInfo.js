
const dbcon =require('./DbConnection')
const query ="SELECT * FROM `lJEpEVWywz`.`USER_INFO`";

exports.getUsers = async ()=>{
  console.log("Inside getUsers...")
   try{
    const result = await dbcon.query(query)
    console.log("Result is : "+ Object.values(JSON.parse(JSON.stringify(result))))
    return "Success" 
   }catch(err){
     console.log(err)
     return("Error")
   }
  
}


