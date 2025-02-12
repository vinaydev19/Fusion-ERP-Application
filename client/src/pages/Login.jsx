import Loading from "@/components/commen/Loading";
import { getUser } from "@/redux/userSlice";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log(email, password);

    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      
      console.log(res);
      dispatch(getUser(res?.data.data.user))
      if (res.data.success) {
        navigate("/");
        setIsLoading(false);
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(`error on register page || ${error}`);
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 h-screen w-full">
      <h1 className="font-bold text-3xl">Welcome back</h1>
      <p className="text-[#372929]">Sign in to your account to continue</p>
      <form
        onSubmit={formSubmitHandler}
        className="flex border-2 p-5  rounded-xl flex-col gap-5 w-3/4 md:w-[35%]"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            placeholder="Enter your Email"
            required
            className="outline-none rounded-xl px-3 py-2 road border-2"
            id="Email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="outline-none rounded-xl px-3 py-2 road border-2"
            placeholder="Enter your Password"
            required
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <Link to="findaccount">
          <p className="text-blue-700 hover:underline text-right">
            Forgot password?
          </p>
        </Link>
        {isLoading ? (
          <button className="flex justify-center items-center gap-2 bg-blue-700 p-3 text-white rounded-xl">
            <Loading color="#000" />
          </button>
        ) : (
          <button className="flex justify-center items-center gap-2 bg-blue-700 p-3 text-white rounded-xl">
            Login
          </button>
        )}
      </form>
      <div className="flex gap-1 pb-5">
        <p>Don't have an account?</p>
        <Link to="register" className="text-blue-700 hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Login;
