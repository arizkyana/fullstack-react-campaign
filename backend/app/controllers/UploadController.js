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
    try {
      const readFile = fs.readFileSync(`uploads/${fileName}`);
      return res.status(200).send(readFile);
    } catch (error) {
      return res.status(404).json({
        message: "file not found",
      });
    }
  };

  const getImage = async (req, res) => {
    const { fileName } = req.query;
    try {
      const readFile = fs.readFileSync(`uploads/${fileName}`);
      res.setHeader("content-type", "image/png");
      return res.send(readFile);
    } catch (error) {
      return res.status(404).json({
        message: "file not found",
      });
    }
  };

  return {
    upload,
    getFile,
    getImage,
  };
}

module.exports = UploadController();
