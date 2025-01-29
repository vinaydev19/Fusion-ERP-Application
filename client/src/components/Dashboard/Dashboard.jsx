import React from "react";
import NavBar from "../commen/NavBar/NavBar";

function Dashboard() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="h-[10%]">
          <NavBar />
        </div>
        <div>Dashboard</div>
      </div>
    </>
  );
}

export default Dashboard;
