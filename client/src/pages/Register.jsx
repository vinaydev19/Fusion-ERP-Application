import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex w-full ">
      <div className="w-2/4 bg-[#f0eefe] hidden md:flex md:justify-center md:flex-col md:items-center">
        <img className="p-5 " src="../../image/placeholder.png"></img>
      </div>
      <div className="flex flex-col mt-5 justify-center w-full md:w-2/4 items-center gap-2">
        <h1 className="font-bold text-3xl">Create yourr account</h1>
        <p className="text-[#9e9c9c]">Enter yourr details to get started</p>
        <form className="flex flex-col gap-5 w-[70%]">
          <div className="flex flex-col gap-2">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              className="outline-none rounded-xl px-3 py-2  border-2"
              placeholder="Enter your Full Name"
              required
              id="fullName"
              name="fullName"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              placeholder="Enter your Username"
              required
              className="outline-none rounded-xl px-3 py-2 road border-2"
              id="Username"
              name="Username"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              placeholder="Enter your Email"
              required
              className="outline-none rounded-xl px-3 py-2 road border-2"
              id="Email"
              name="Email"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="PhoneNumber">Phone Number</label>
            <input
              type="text"
              className="outline-none rounded-xl px-3 py-2 road border-2"
              placeholder="Enter your Phone Number"
              required
              id="PhoneNumber"
              name="PhoneNumber"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="CompanyName">Company Name</label>
            <input
              type="text"
              className="outline-none rounded-xl px-3 py-2 road border-2"
              placeholder="Enter your Company Name"
              required
              id="CompanyName"
              name="CompanyName"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="outline-none rounded-xl px-3 py-2 road border-2"
              placeholder="Enter your Password"
              required
              id="password"
              name="password"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="text"
              className="outline-none rounded-xl px-3 py-2 road border-2"
              placeholder="Enter your Confirm Password"
              required
              id="confirmpassword"
              name="confirmpassword"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="ProfilePicture">Profile Picture</label>
            <input
              type="file"
              className="outline-none rounded-xl px-3 py-2 road border-2"
              required
              id="ProfilePicture"
              name="ProfilePicture"
            ></input>
          </div>
          <button className="flex justify-center items-center gap-2 bg-blue-700 p-3 text-white rounded-xl">
            Create Account <FaArrowRight />
          </button>
        </form>
        <div className="flex gap-1 pb-5">
          <p>Already have an account?</p>
          <Link className="text-blue-700 hover:underline">Sign in</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
