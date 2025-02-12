import React, { useEffect, useState } from "react";
import NavBar from "../commen/NavBar/NavBar";
import { useSelector } from "react-redux";
import useMyProfile from "@/hooks/useMyProfile";

function Profile() {
  // const [profile, setProfile] = useState({
  //   fullName: "John Doe",
  //   username: "johndoe",
  //   email: "john@example.com",
  //   phoneNumber: "+1234567890",
  //   companyName: "Acme Inc.",
  // });

  useMyProfile();

  const profile = useSelector((state) => state.user);
  console.log("Updated Profile Data in Component:", profile);

  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full flex items-center justify-center flex-col">
          <h1 className="m-3 font-bold text-3xl">My Profile</h1>
          <div className="w-2/4 border-2 p-5 rounded-2xl shadow-xl m-5">
            <form className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="flex justify-center items-center w-full shrink-0">
                  <img
                    className="h-16 w-16 object-cover rounded-full"
                    src={profile?.profilePic}
                    alt="Profile"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    readOnly
                    value={profile?.fullName}
                    className="mt-1 outline-none block w-full rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={profile?.username}
                    readOnly
                    className="mt-1 outline-none block w-full rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={profile?.email}
                    readOnly
                    className="mt-1 outline-none block w-full rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={profile?.phoneNo}
                    readOnly
                    className="mt-1 outline-none block w-full rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={profile?.companyName}
                    readOnly
                    className="mt-1 outline-none block w-full rounded-md"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
