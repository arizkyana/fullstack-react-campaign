import { callAPI } from "@/libraries/network";

function UploadService() {
  const doUpload = async (payload) => {
    const response = await callAPI({
      url: "/upload",
      method: "post",
      data: payload,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWQ2YzY3MjczNmY4MTJkZDM2Nzk5MDMiLCJpYXQiOjE2NDE1MjE5MTZ9.2xeIF688GLf-AJKMnpNi6fpYNVXsgJjcy4QgiSMX7TY",
      },
    });
    return response;
  };

  const getImage = async (fileName) => {
    const response = await callAPI({
      url: "/files",
      method: "get",
      params: { fileName },
      responseType: "blob",
    });
    return response;
  };

  return {
    doUpload,
    getImage,
  };
}

export default UploadService();
