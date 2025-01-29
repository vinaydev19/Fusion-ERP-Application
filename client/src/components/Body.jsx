import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Inventory from "./Dashboard/Inventory";
import Sales from "./Dashboard/Sales";
import Financial from "./Dashboard/Financial";

function Body() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "inventory",
          element: <Inventory />,
        },
        {
          path: "sales",
          element: <Sales />,
        },
        {
          path: "financial",
          element: <Financial />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default Body;
