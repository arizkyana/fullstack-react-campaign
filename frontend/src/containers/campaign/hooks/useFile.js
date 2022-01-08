import { UploadService } from "src/services";

const { useState } = require("react");

const useFile = () => {
  const [file, setFile] = useState();

  const handleChangeFile = (e) => {
    const { files } = e.target;
    if (files) {
      setFile(files[0]);
    }
  };

  const doUpload = async (filePayload) => {
    const formData = new FormData();
    formData.append("file", filePayload);
    const {
      data: {
        file: { filename },
      },
    } = await UploadService.doUpload(formData);
    return filename;
  };

  return {
    file,
    handleChangeFile,
    doUpload,
  };
};

export default useFile;
