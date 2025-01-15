import mongoose, { Schema } from "mongoose";

const supplierSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const productInventorySchema = new Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    productImage: {
      type: String,
    },
    stockQuantity: {
      type: Number,
      required: true,
    },
    costPrice: {
      type: Number,
      required: true,
    },
    sellingPrice: {
      type: Number,
      required: true,
    },
    warehouseLocation: {
      type: String,
    },
    expirationDate: {
      type: Date,
    },
    supplier: {
      type: [supplierSchema],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const ProductInventory = mongoose.model(
  "ProductInventory",
  productInventorySchema
);
