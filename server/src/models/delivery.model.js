import mongoose, { Schema } from "mongoose";

const deliverySchema = new Schema(
  {
    saleId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Sale",
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Customer",
    },
    deliveryDate: {
      type: Date,
      required: true,
    },
    deliveryStatus: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered"],
      required: true,
    },
    deliveryAddress: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


export const Delivery = mongoose.model("Delivery", deliverySchema)