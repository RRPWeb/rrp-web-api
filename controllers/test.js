var request = require("request");

const extFileClient = require("../clients/extFile.client");
const smsClient = require("../clients/sms.client");
const waClient = require("../clients/whatsapp.client");
const gdriveClient = require("../clients/gdrive.client");
const urlService = require("../services/url.service");
const { google } = require("googleapis");
const getfilelist = require("google-drive-getfilelist");
const SCOPES = ["https://www.googleapis.com/auth/drive"];
const auth = new google.auth.GoogleAuth({ scopes: SCOPES });

exports.testMessege = async (req, res, next) => {
  //image proxy ********************
  // let response = await userService.getAllUsers()
  // res.status(200).json(response)
  // const imageUrl = 'https://i.picsum.photos/id/574/300/300.jpg?hmac=D8e1xkNmWFV7sZNtVa8nLzgusD4LendI-0RSMXM86wk';
  //     req.pipe(request(imageUrl)).pipe(res);

  //pdf proxy ***********************
  // const imageUrl = 'https://legislative.gov.in/sites/default/files/coi-4March2016.pdf';
  // let image = await imageClient.getFile(imageUrl)

  // req.pipe(image).pipe(res);
  //let msg = await smsClient.sendsms();
  //  let msg = await waClient.sendMsg();
  // getfilelist.GetFileList(
  //   {
  //     auth: auth,
  //     fields: "files(id)",
  //     id: "1vqyXxCtczOwblrCFiCxD5ExJ2smbaYLV"
  //   },
  //   (err, response) => {
  //     if (err) {
  //       console.log(err);
  //       res.status(200).json(err);
  //     }
  //     const fileList = response.fileList.flatMap(({ files }) => files);
  //     console.log(fileList);
  //     res.status(200).json(fileList);
  //   }
  // );
  // let msg = await gdriveClient.deleteFile(req.query.fileId);
  // res.status(200).json("Hi");

  const filename = req.params.filename;
  const response = await urlService.getFileId(filename)
  if(response.data){
    const fileurl = "https://drive.google.com/uc?export=view&id="+response.data
    let fileresponse = await extFileClient.getFile(fileurl)
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', fileresponse.getHeader('Content-Disposition'))
    req.pipe(fileresponse).pipe(res)
  }else{
    res.status(500).json(response);
  }
  
};
