const fs = require("fs");
function UploadController() {
  const upload = (req, res) => {
    return res.status(200).json({
      message: "upload ok",
      file: req.file,
    });
  };

  const getFile = async (req, res) => {
    const { fileName } = req.query;
    const readFile = fs.readFileSync(`uploads/${fileName}`);
    return res.status(200).send(readFile);
  };

  return {
    upload,
    getFile,
  };
}

module.exports = UploadController();
