var request = require("request");

const imageClient = require("../clients/extFile.client");
const smsClient = require("../clients/sms.client");
const waClient = require("../clients/whatsapp.client");
const gdriveClient = require("../clients/gdrive.client");

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
  let msg = await gdriveClient.uploadFile();
  res.status(200).json(msg);
};
