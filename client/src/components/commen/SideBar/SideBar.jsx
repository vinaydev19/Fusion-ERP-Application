import React from "react";
import { MdInventory } from "react-icons/md";
import { MdSell } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { FaFileInvoice } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { GoProjectSymlink } from "react-icons/go";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <div className=" border-r-2">
        <div className="p-5 border-b-2 mb-1 text-center font-bold text-lg">
          <h1>Fusion ERP</h1>
        </div>
        <div className=" flex flex-col p-2 gap-5">
          <Link
            to="/inventory"
            className="flex text-lg gap-2 items-center hover:bg-gray-300 p-3 rounded-xl"
          >
            <MdInventory className="text-black" size={"24px"} />
            <button>Inventory Management</button>
          </Link>
          <Link
            to="sales"
            className="flex text-lg gap-2 items-center hover:bg-gray-300 p-3 rounded-xl"
          >
            <MdSell size={"24px"} className="text-black" />
            <button>Sales Management</button>
          </Link>
          <Link
            to="financial"
            className="flex text-lg gap-2 items-center hover:bg-gray-300 p-3 rounded-xl"
          >
            <GiMoneyStack size={"24px"} className="text-black" />
            <button>Financial Management</button>
          </Link>
          <Link
            to="invoice-generator"
            className="flex text-lg gap-2 items-center hover:bg-gray-300 p-3 rounded-xl"
          >
            <FaFileInvoice size={"24px"} className="text-black" />
            <button>Invoice Generator</button>
          </Link>
          <Link
            to="employee-management"
            className="flex text-lg gap-2 items-center hover:bg-gray-300 p-3 rounded-xl"
          >
            <IoMdPeople size={"24px"} className="text-black" />
            <button>Employee Management</button>
          </Link>
          <Link
            to="project-management"
            className="flex text-lg gap-2 items-center hover:bg-gray-300 p-3 rounded-xl"
          >
            <GoProjectSymlink size={"24px"} className="text-black" />
            <button>Project Management</button>
          </Link>
          <Link
            to="delivery"
            className="flex text-lg gap-2 items-center hover:bg-gray-300 p-3 rounded-xl"
          >
            <CiDeliveryTruck size={"24px"} className="text-black" />
            <button>Product Delivery</button>
          </Link>
          <Link
            to="reporting-analytice"
            className="flex text-lg gap-2 items-center hover:bg-gray-300 p-3 rounded-xl"
          >
            <TbBrandGoogleAnalytics size={"24px"} className="text-black" />
            <button>Reporting & Analytics</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SideBar;
