import React from "react";
import { Link } from "react-router-dom";

function FindAccount() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 h-screen w-full">
      <h1 className="font-bold text-3xl">Email Verification</h1>
      <form className="flex border-2 p-5  rounded-xl flex-col gap-5 w-3/4 md:w-[35%]">
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
        <button className="flex justify-center items-center gap-2 bg-blue-700 p-3 text-white rounded-xl">
          Submit
        </button>
      </form>
      <div className="flex gap-1 pb-5">
        <p>Already have an account?</p>
        <Link to="login" className="text-blue-700 hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default FindAccount;
