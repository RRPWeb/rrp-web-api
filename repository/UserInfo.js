
const dbcon =require('./DbConnection')
const query ="SELECT * FROM `lJEpEVWywz`.`USER_INFO`";

exports.getUsers = async ()=>{
  console.log("Inside getUsers...")
   try{
    const result = await dbcon.query(query)
    console.log("Result is : "+ JSON.Stringify(result[0]))
    return "Success" 
   }catch(err){
     console.log(err)
     return("Error")
   }
  
}


