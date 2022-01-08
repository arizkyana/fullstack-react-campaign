import axios from "axios";

export const callAPI = async (axiosConfig) => {
  try {
    const instanceAxios = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    });
    const response = await instanceAxios(axiosConfig);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
