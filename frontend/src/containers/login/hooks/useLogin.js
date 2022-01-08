import { AuthService } from "src/services";

const useLogin = () => {
  const doLogin = async (payload) => {
    try {
      const {
        data: { token },
      } = await AuthService.doLogin(payload);

      // store the login tokens to localstorage
      localStorage.setItem("token", token);
      window.location.href = "/campaign";
    } catch (error) {
      alert("Login gagal. email dan password Anda salah");
    }
  };

  return {
    doLogin,
  };
};

export default useLogin;
