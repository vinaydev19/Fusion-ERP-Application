import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import Inventory from "./Dashboard/Inventory";
import Sales from "./Dashboard/Sales";
import Financial from "./Dashboard/Financial";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Dashboard from "./Dashboard/Dashboard";
import Invoice from "./Dashboard/Invoice";
import Project from "./Dashboard/Project";
import Delivery from "./Dashboard/Delivery";
import Employee from "./Dashboard/Employee";
import ReportingAnalytics from "./Dashboard/ReportingAnalytics";
import LandingPage from "@/pages/LandingPage";
import FindAccount from "@/pages/FindAccount";
import VerificationCode from "@/pages/VerificationCode";
import Profile from "./Dashboard/Profile";
import ChangePassword from "./Dashboard/changePassword";

function Body() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Home />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "inventory", element: <Inventory /> },
        { path: "sales", element: <Sales /> },
        { path: "financial", element: <Financial /> },
        { path: "delivery", element: <Delivery /> },
        { path: "project-management", element: <Project /> },
        { path: "employee-management", element: <Employee /> },
        { path: "reporting-analytice", element: <ReportingAnalytics /> },
        { path: "invoice-generator", element: <Invoice /> },
        { path: "profile", element: <Profile /> },
        { path: "change-password", element: <ChangePassword /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default Body;
