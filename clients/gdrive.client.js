const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");
const SCOPES = ["https://www.googleapis.com/auth/drive"];
const auth = new google.auth.GoogleAuth({ scopes: SCOPES });
exports.uploadFile = async () => {
  console.log("cashed credential" + auth.cachedCredential);
  console.log("env cred" + process.env.GOOGLE_APPLICATION_CREDENTIALS);
  const gdriveService = google.drive({ version: "v3", auth });
  let fileMetaData = {
    name: "rtr.png",
    parents: ["1vqyXxCtczOwblrCFiCxD5ExJ2smbaYLV"]
  };
  const root = path.dirname(
    require.main.filename || process.mainModule.filename
  );
  console.log(root);
  let media = {
    mimeType: "image/png",
    body: fs.createReadStream(path.join(root + "//configs//rtr.png"))
  };
  let response = await gdriveService.files.create({
    resource: fileMetaData,
    media: media,
    fields: "id"
  });

  if (response && response.status === 200) {
    return response.data.id;
  } else {
    return "error";
  }
};