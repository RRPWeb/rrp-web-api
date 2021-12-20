const { google } = require("googleapis");
const fs = require("fs");
const SCOPES = ["https://www.googleapis.com/auth/drive"];
const auth = new google.auth.GoogleAuth({ scopes: SCOPES });
exports.uploadFile = async () => {
  const gdriveService = google.drive({ version: "v3", auth });
  let fileMetaData = {
    name: "rtr.png",
    parents: ["RRP-DOCS"]
  };
  let media = {
    mimeType: "image/png",
    body: fs.createReadStream("../configs/rtr.png")
  };

  let response = await gdriveService.files.create({
    resource: fileMetaData,
    media: media,
    fields: "id"
  });
  if (response.status === 200) {
    return response.data.id;
  } else {
    return response.errors;
  }
};
