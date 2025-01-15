import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ProductInventory } from "../models/Inventory.model.js";
import { Sale } from "../models/sales.model.js";
import { Customer } from "../models/Customer.model.js";

const createSales = asyncHandler(async (req, res) => {
  const {
    productId, // this is product id
    customerId,
    quantity,
    totalPrice,
    saleDate,
    paymentMethod,
    status,
  } = req.body;

  if (
    [
      productId, // this is product id
      customerId,
      quantity,
      totalPrice,
      saleDate,
      paymentMethod,
      status,
    ].every((field) => field === undefined || field === null || field === "")
  ) {
    throw new ApiError(403, "all field is required");
  }

  const productDocs = await ProductInventory.findOne({ productId });
  if (!productDocs) {
    throw new ApiError(403, "product is not found");
  }

  const customerDocs = await Customer.findOne({ customerId });
  if (!customerDocs) {
    throw new ApiError(403, "customer is not found");
  }
  // this productDocsId is db objectId

  const sale = await Sale.create({
    productDocsId: productDocs._id,
    customerDocsId: customerDocs._id,
    quantity,
    totalPrice,
    saleDate,
    paymentMethod,
    status,
    userId: req.user._id,
  });

  if (!sale) {
    throw new ApiError(500, "something want wrong while add sales details");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, sale, "sales added successfully"));
});

const getAllSales = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const AllSales = await Sale.findOne({ userId });

  return res
    .status(200)
    .json(
      new ApiResponse(200, { AllSales }, "fetch all products successfully")
    );
});

const getOneSale = asyncHandler(async (req, res) => {
  const saleDocsId = req.params.saleDocsId;

  const sale = await Sale.findById(saleDocsId);

  return res
    .status(200)
    .json(new ApiResponse(200, sale, "fetch one product successfully"));
});

const updateSale = asyncHandler(async (req, res) => {
  const {
    productId, // this is product id
    customerId,
    quantity,
    totalPrice,
    saleDate,
    paymentMethod,
    status,
  } = req.body;

  if (
    [
      productId, // this is product id
      customerId,
      quantity,
      totalPrice,
      saleDate,
      paymentMethod,
      status,
    ].every((field) => field === undefined || field === null || field === "")
  ) {
    throw new ApiError(403, "all field is required");
  }

  const productDocs = await ProductInventory.findOne({ productId });

  const customerDocs = await Customer.findOne({ customerId });

  const saleDocsId = req.params.saleDocsId;

  const sale = await Sale.findByIdAndUpdate(
    saleDocsId,
    {
      $set: {
        productDocsId: productDocs._id,
        customerDocsId: customerDocs._id,
        quantity,
        totalPrice,
        saleDate,
        paymentMethod,
        status,
      },
    },
    {
      new: true,
    }
  );

  return res
    .status(200)
    .json(
      new ApiResponse(200, sale, "product details are updated successfully")
    );
});

const deleteSale = asyncHandler(async (req, res) => {
  const saleDocsId = req.params.saleDocsId;

  const sale = await Sale.findByIdAndDelete(saleDocsId);

  return res
    .status(200)
    .json(new ApiResponse(200, sale, "product delete successfully"));
});

export { createSales, getAllSales, getOneSale, updateSale, deleteSale };
