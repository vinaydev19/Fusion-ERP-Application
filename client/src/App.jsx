import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import { RouterProvider } from "react-router";
import { Home } from "lucide-react";
import Inventory from "./components/Dashboard/Inventory";
import Sales from "./components/Dashboard/Sales";
import Financial from "./components/Dashboard/Financial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "inventory", element: <Inventory /> },
      { path: "sales", element: <Sales /> },
      { path: "financial", element: <Financial /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
