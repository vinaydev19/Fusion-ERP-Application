import React from "react";
import { IoIosNotifications } from "react-icons/io";

function NavBar() {
  return (
    <>
      <div className="h-full border-b-2 flex justify-between p-2 items-center">
        <div>
          <h1 className=" mb-1 text-center font-bold text-lg">
            Dashboard Overview
          </h1>
        </div>
        <div className="flex gap-5">
          <div className="flex items-center gap-1 border-2 hover:bg-gray-300 p-2 rounded-xl">
            <IoIosNotifications />
            <button>Notifications</button>
          </div>
          <div className="pr-1">
            <img
              src="../../../../image/avatar.jpeg"
              className="w-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
