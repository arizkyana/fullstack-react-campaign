const uuid = require("uuid");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const fileExt = {
      "image/png": "png",
      "image/jpg": "jpg",
      "application/pdf": "pdf",
    };

    const fileName = `${uuid.v1()}.${fileExt[file.mimetype]}`;

    cb(null, fileName);
  },
});

const upload = multer({ storage });

const singleUpload = (fieldName) => upload.single(fieldName);

module.exports = {
  singleUpload,
};
