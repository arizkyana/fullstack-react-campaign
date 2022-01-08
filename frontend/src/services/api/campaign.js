import { callAPI } from "src/libraries/network";

function CampaignService() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const create = async (payload) => {
    const response = await callAPI({
      url: "/campaign",
      method: "post",
      data: payload,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  };

  const update = async (slug, payload) => {
    const response = await callAPI({
      url: `/campaign/${slug}`,
      method: "put",
      data: payload,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  };

  const remove = async (slug) => {
    const response = await callAPI({
      url: `/campaign/${slug}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${token}`,
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
  const getCampaign = async (slug) => {
    const response = await callAPI({
      url: `/campaign/${slug}`,
      method: "get",
    });
    return response;
  };

  return {
    loadCampaign,
    create,
    getCampaign,
    update,
    remove,
  };
}

export default CampaignService();
