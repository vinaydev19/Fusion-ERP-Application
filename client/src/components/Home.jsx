import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./commen/SideBar/SideBar";
import NavBar from "./commen/NavBar/NavBar";

function Home() {
  return (
    <>
      <div className="w-full flex  h-screen">
        <div className="w-1/5">
          <SideBar />
        </div>
        <div className="w-4/5">
          <div className="w-full h-screen">
            <div className="h-[10%]">
              <NavBar />
            </div>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
