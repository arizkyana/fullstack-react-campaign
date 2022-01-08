import { useFormik, getIn } from "formik";
import * as Yup from "yup";
import useLogin from "../hooks/useLogin";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});

const LoginContainer = () => {
  const { doLogin } = useLogin();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleOnSubmit = async (values) => {
    await doLogin(values);
  };

  const { handleChange, handleBlur, errors, touched, handleSubmit, values } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: handleOnSubmit,
    });
  return (
    <div className="mx-auto max-w-5xl px-5 lg:px-0 h-screen flex justify-center items-center">
      <div className="max-w-xl flex flex-col justify-center  items-start">
        <h1 className="text-2xl font-bold mb-5">Login</h1>
        <form onSubmit={handleSubmit} className="w-full">
          <label
            htmlFor="lokasi"
            className="inline-flex flex-col justify-start items-start w-full"
          >
            <span className="inline-block mb-2">Email</span>
            <input
              type="text"
              name="email"
              className="py-2 px-3 w-full border rounded-lg"
              placeholder="Tuliskan email@anda.disini"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values.email}
            />
            <div className="h-9">
              {getIn(errors, "email") && getIn(touched, "email") && (
                <span className="text-red-600 text-xs">{errors.email}</span>
              )}
            </div>
          </label>
          <label
            htmlFor="lokasi"
            className="inline-flex flex-col justify-start items-start w-full"
          >
            <span className="inline-block mb-2">Password</span>
            <input
              type="password"
              name="password"
              className="py-2 px-3 w-full border rounded-lg"
              placeholder="Tuliskan password Anda"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values.password}
            />
            <div className="h-9">
              {getIn(errors, "password") && getIn(touched, "password") && (
                <span className="text-red-600 text-xs">{errors.password}</span>
              )}
            </div>
          </label>
          <button
            type="submit"
            className="rounded-lg w-full bg-blue-600 hover:bg-blue-700 font-bold text-sm text-white px-6 h-10"
          >
            Masuk Akun Anda
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginContainer;
