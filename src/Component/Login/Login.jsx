import toast from "react-hot-toast";
import { useFormik } from "formik";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../interceptors/axiosInstance";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const Login = async (values) => {

    try {
      let toastId = toast.loading('Loading..');
      const formData = JSON.stringify(values);
      const response = await axiosInstance.post("/auth/login", { formData });
      login(response.data);
      toast.dismiss(toastId);
      toast.success(response.message);
      navigate('/dashboard');  
    } catch (err) {
      console.log(err.message)
      toast.error(err.message)
      toast.error(err)
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      Login(values);
    },
  });

  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1">
          <div className="flex flex-col justify-center items-center h-screen">
            <form
              className="bg-gray-300 flex flex-col min-w-[300px] space-y-5 items-center border-2 border-500 shadow-2xl rounded-xl p-5"
              onSubmit={formik.handleSubmit}
            >
              <input
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-[100%] p-2"
                required
              />
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-[100%] p-2"
                required
              />
              <button
                className="bg-red-500 p-3 w-[100%] rounded-xl"
                type="submit" disabled={false}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
