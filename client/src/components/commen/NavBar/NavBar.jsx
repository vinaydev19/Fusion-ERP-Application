import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function NavBar() {
  return (
    <>
      <div className="h-full border-b-2 flex justify-between p-2 items-center">
        <div>
          <h1 className=" mb-1 text-center font-bold text-lg">
            <Link to="/">Dashboard Overview</Link>
          </h1>
        </div>
        <div className="flex gap-5">
          <div className="flex items-center gap-1 border-2 hover:bg-gray-300 p-2 rounded-xl">
            <IoIosNotifications />
            <button>Notifications</button>
          </div>
          <div className="pr-5 flex ">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <img
                  className="w-8 rounded-full outline-none"
                  src="../../../../image/avatar.jpeg"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-3 mt-3">
                <DropdownMenuLabel className="">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="bg-gray-200 m-[2px] hover:cursor-pointer">
                  <Link to="profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-gray-200 m-[2px] hover:cursor-pointer">
                  <Link to={'change-password'}>Change Password</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-gray-200 m-[2px] hover:cursor-pointer">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-gray-200 m-[2px] hover:cursor-pointer">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
