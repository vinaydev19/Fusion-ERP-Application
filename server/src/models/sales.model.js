import mongoose from "mongoose";

const saleScheme = new mongoose.Schema(
  {
    productDocsId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductInventory",
    },
    customerDocsId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    quantity: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    saleDate: {
      type: Date,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["Cash", "Credit Card", "Online", "Other"],
    },
    status: {
      type: String,
      enum: ["Completed", "Pending", "Cancelled"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Sale = mongoose.model("Sale", saleScheme);
