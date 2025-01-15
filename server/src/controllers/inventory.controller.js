import { uploadOncloudinary } from "../utils/cloudinary.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ProductInventory } from "../models/Inventory.model.js";

const createProduct = asyncHandler(async (req, res) => {
  const {
    productId,
    name,
    category,
    description,
    stockQuantity,
    costPrice,
    sellingPrice,
    warehouseLocation,
    expirationDate,
    supplier,
  } = req.body;

  if (
    [
      productId,
      name,
      category,
      description,
      stockQuantity,
      costPrice,
      sellingPrice,
      warehouseLocation,
      expirationDate,
      supplier,
    ].every((field) => field === undefined || field === null || field === "")
  ) {
    throw new ApiError(403, "all field is required");
  }

  const productImageLocalPath = req.file?.path;

  const cloudinaryProductImage = await uploadOncloudinary(
    productImageLocalPath
  );

  if (!cloudinaryProductImage) {
    throw new ApiError(500, "something want wrong while upload the image");
  }

  const product = await ProductInventory.create({
    productId,
    name,
    category,
    description,
    stockQuantity,
    costPrice,
    sellingPrice,
    warehouseLocation,
    expirationDate,
    supplier,
    productImage: cloudinaryProductImage.url,
    userId: req.user._id,
  });

  if (!product) {
    throw new ApiError(500, "something want wrong while add product details");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, product, "product added successfully"));
});

const getAllProducts = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const AllProducts = await ProductInventory.findOne({ userId });

  return res
    .status(200)
    .json(
      new ApiResponse(200, { AllProducts }, "fetch all products successfully")
    );
});

const getOneProduct = asyncHandler(async (req, res) => {
  const productDocsId = req.params.productDocsId;

  const product = await ProductInventory.findById(productDocsId);

  return res
    .status(200)
    .json(new ApiResponse(200, product, "fetch one product successfully"));
});

const updateProduct = asyncHandler(async (req, res) => {
  const {
    productId,
    name,
    category,
    description,
    stockQuantity,
    costPrice,
    sellingPrice,
    warehouseLocation,
    expirationDate,
    supplier,
  } = req.body;

  if (
    [
      productId,
      name,
      category,
      description,
      stockQuantity,
      costPrice,
      sellingPrice,
      warehouseLocation,
      expirationDate,
      supplier,
    ].every((field) => field === undefined || field === null || field === "")
  ) {
    throw new ApiError(403, "all field is required");
  }

  const productDocsId = req.params.productDocsId;

  const product = await ProductInventory.findByIdAndUpdate(
    productDocsId,
    {
      $set: {
        productId,
        name,
        category,
        description,
        stockQuantity,
        costPrice,
        sellingPrice,
        warehouseLocation,
        expirationDate,
        supplier,
      },
    },
    {
      new: true,
    }
  );

  return res
    .status(200)
    .json(
      new ApiResponse(200, product, "product details are updated successfully")
    );
});

const deleteProduct = asyncHandler(async (req, res) => {
  const productDocsId = req.params.productDocsId;

  const product = await ProductInventory.findByIdAndDelete(productDocsId);

  return res
    .status(200)
    .json(new ApiResponse(200, product, "product delete successfully"));
});

const updateProductImage = asyncHandler(async (req, res) => {
  const productImageLocalPath = req.file?.path;

  if (!productImageLocalPath) {
    throw new ApiError(403, "profile Pic is required");
  }

  const cloudinaryProductImage = await uploadOncloudinary(
    productImageLocalPath
  );

  if (!cloudinaryProductImage) {
    throw new ApiError(403, "something want wrong while upload profile Pic");
  }

  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        productImage: cloudinaryProductImage.url,
      },
    },
    {
      new: true,
    }
  );

  return res
    .status(200)
    .json(new ApiResponse(200, { user }, "profile Pic is update successfully"));
});

export {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  updateProductImage,
};
