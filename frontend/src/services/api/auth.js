import { callAPI } from "@/libraries/network";

function AuthService() {
  const doLogin = async (payload) => {
    const response = await callAPI({
      url: "/login",
      method: "post",
      data: payload,
    });
    return response;
  };

  const me = async (token) => {
    const response = await callAPI({
      url: "/me",
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  };

  return {
    doLogin,
    me,
  };
}

export default AuthService();
