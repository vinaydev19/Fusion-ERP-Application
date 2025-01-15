import { uploadOncloudinary } from "../utils/cloudinary.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Financial } from "../models/Financial.model.js";

const createFinancialTransaction = asyncHandler(async (req, res) => {
  const {
    transactionType,
    amount,
    description,
    date,
    category,
    paymentMethod,
  } = req.body;

  if (
    [transactionType, amount, description, date, category, paymentMethod].every(
      (field) => field === undefined || field === null || field === ""
    )
  ) {
    throw new ApiError(403, "all field is required");
  }

  const financialTransaction = await Financial.create({
    transactionType,
    amount,
    description,
    date,
    category,
    paymentMethod,
    userId: req.user._id,
  });

  if (!financialTransaction) {
    throw new ApiError(500, "something want wrong while add product details");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, financialTransaction, "product added successfully")
    );
});

const getAllFinancialTransaction = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const AllFinancialTransaction = await Financial.findOne({ userId });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { AllFinancialTransaction },
        "fetch all products successfully"
      )
    );
});

const getOneFinancialTransaction = asyncHandler(async (req, res) => {
  const financialTransactionDocsId = req.params.financialTransactionDocsId;

  const getOneFinancialTransaction = await Financial.findById(
    financialTransactionDocsId
  );

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        getOneFinancialTransaction,
        "fetch one product successfully"
      )
    );
});

const updateFinancialTransaction = asyncHandler(async (req, res) => {
  const {
    transactionType,
    amount,
    description,
    date,
    category,
    paymentMethod,
  } = req.body;

  if (
    [transactionType, amount, description, date, category, paymentMethod].every(
      (field) => field === undefined || field === null || field === ""
    )
  ) {
    throw new ApiError(403, "all field is required");
  }

  const financialTransactionDocsId = req.params.financialTransactionDocsId;

  const financialTransaction = await Financial.findByIdAndUpdate(
    financialTransactionDocsId,
    {
      $set: {
        transactionType,
        amount,
        description,
        date,
        category,
        paymentMethod,
      },
    },
    {
      new: true,
    }
  );

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        financialTransaction,
        "product details are updated successfully"
      )
    );
});

const deleteFinancialTransaction = asyncHandler(async (req, res) => {
  const financialTransactionDocsId = req.params.financialTransactionDocsId;

  const financialTransaction = await Financial.findByIdAndDelete(
    financialTransactionDocsId
  );

  return res
    .status(200)
    .json(
      new ApiResponse(200, financialTransaction, "product delete successfully")
    );
});

export {
  createFinancialTransaction,
  getAllFinancialTransaction,
  getOneFinancialTransaction,
  updateFinancialTransaction,
  deleteFinancialTransaction,
};
