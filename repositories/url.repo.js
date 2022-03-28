
const dbHelper =require('./dbhelper')

exports.getFileId = async (filename) => {
    const sql ="SELECT EXTERNAL_URL FROM URL WHERE INTERNAL_URL=?";
  
    const parameters = [filename]
    try{
        const response = await dbHelper.execDql(sql,parameters)
        const fileid =response[0].EXTERNAL_URL.trim()
        return {data : fileid}
      }catch(err){
        return {error : err}
      }
  }