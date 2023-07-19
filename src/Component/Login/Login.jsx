// import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = async () => {
    const userid = {
      email,
      password,
    };

    try {
      toast.loading("Loading..");
      let response = await axios.post("/api/auth/login", userid);
      toast.dismiss();
      toast.success(response.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col w-[500px] space-y-5 items-center border-2 border-500 shadow-2xl rounded-xl p-5">
          <Toaster position="top-center"></Toaster>
          <h1 className="text-3xl">Login Page</h1>
          <input
            type="text"
            className="border-2 w-[260px] h-[40px] p-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="border-2 w-[260px] h-[40px] p-2"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="flex justify-center items-center w-[260px]">
            {/* <Link className="underline" to="/Register">
              Go to Register
            </Link> */}
            <button
              className="bg-blue-800 text-white px-5 py-2"
              onClick={Login}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
