
const extFileClient = require("../clients/extFile.client");
const urlService = require("../services/url.service");

exports.getfile = async (req, res, next) => {
  const filename = req.params.filename;
  const response = await urlService.getFileId(filename);
  if (response.data) {
    const fileurl =
      "https://drive.google.com/uc?export=view&id=" + response.data;
    let fileresponse = await extFileClient.getFile(fileurl);
    req.pipe(fileresponse).pipe(res);
  } else {
    res.status(500).json(response);
  }
};
