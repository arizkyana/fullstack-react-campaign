import { LoginContainer } from "@/containers/login";
import Head from "next/head";
import { useEffect, useState } from "react";

const Login = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (token) window.location.href = "/campaign";
    setMounted(true);
  }, [token]);

  return (
    <>
      <Head>
        <title>Login Admin</title>
      </Head>
      {mounted && <LoginContainer />}
    </>
  );
};

export default Login;
