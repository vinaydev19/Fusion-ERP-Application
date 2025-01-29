import React from "react";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="w-full flex  h-screen">
        <div className="w-1/5">
          <SideBar />
        </div>
        <div className="w-4/5">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Home;
