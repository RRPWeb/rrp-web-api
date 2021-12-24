const { google } = require("googleapis");
const fs = require("fs");

//constants
const SCOPES = ["https://www.googleapis.com/auth/drive"];
const auth = new google.auth.GoogleAuth({ scopes: SCOPES });
const gdriveService = google.drive({ version: "v3", auth });

exports.uploadFile = async (filename, filetype, filepath, gfolderpath) => {
  let fileMetaData = {
    name: filename,
    parents: [gfolderpath]
  };
  let media = {
    mimeType: filetype,
    body: fs.createReadStream(filepath)
  };
  let response = await gdriveService.files.create({
    resource: fileMetaData,
    media: media,
    fields: "id"
  });

  if (response && response.status === 200) {
    return { gdriveFileId: response.data.id };
  } else {
    console.log("Error in file upload :" + response.errors);
    return { error: response.errors };
  }
};
exports.deleteFile = async (gdrivefileId) => {
  const response = await gdriveService.files.delete({
    fileId: gdrivefileId
  });
  if (response && response.status === 200) {
    return { msg: "success" };
  } else {
    console.log("Error in file deletion :" + response.errors);
    return { error: response.errors };
  }
};
