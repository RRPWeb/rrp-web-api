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
    return { fileid: response.data.id };
  } else {
    return { error: response.errors };
  }
};
