import { callAPI } from "src/libraries/network";

function CampaignService() {
  const create = async (payload) => {
    const response = await callAPI({
      url: "/campaign",
      method: "post",
      data: payload,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWQ2YzY3MjczNmY4MTJkZDM2Nzk5MDMiLCJpYXQiOjE2NDE1MjE5MTZ9.2xeIF688GLf-AJKMnpNi6fpYNVXsgJjcy4QgiSMX7TY",
      },
    });
    return response;
  };
  const loadCampaign = async (params) => {
    const response = await callAPI({
      params,
      url: "/campaign",
      method: "get",
    });
    return response;
  };

  return {
    loadCampaign,
    create,
  };
}

export default CampaignService();
