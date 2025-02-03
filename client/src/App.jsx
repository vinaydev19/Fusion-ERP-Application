import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Inventory from "./components/Dashboard/Inventory";
import Sales from "./components/Dashboard/Sales";
import Financial from "./components/Dashboard/Financial";
import Home from "./components/Home";
import Body from "./components/Body";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Body />
        <Toaster />
      </div>
    </>
  );
}

export default App;
