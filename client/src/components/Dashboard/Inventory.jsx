import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

function Inventory() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center p-2">
        Inventory Management
      </h2>
      <div>
        <div className="flex justify-between p-3">
          <div className="flex p-1 items-center relative w-[50%]">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl flex items-center">
            <IoMdAdd className="mr-2" /> Add New Product
          </button>
        </div>
      </div>

      <div>
        <div>
          <Card className="w-[320px] bg-white rounded-lg shadow-md overflow-hidden h-[400px]">
            <img
              src="../../../image/placeholder.png"
              alt="product img"
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <Typography className="text-lg font-semibold mb-2">
                Product 1
              </Typography>
              <Typography className="text-gray-600 mb-2">
                Electronics
              </Typography>
              <Typography className="text-gray-800 font-bold mb-2">
                $100
              </Typography>
              <Typography className="text-green-600">In Stock</Typography>
            </CardContent>
            <CardActions>
              <Button className="mt-4 bg-blue-500 hover:bg-blue-600 hover:text-white text-white font-bold py-2 px-4 rounded-lg w-full">
                Share
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
