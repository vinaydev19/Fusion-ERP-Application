import mongoose, { Schema } from "mongoose";

const purchaseHistorySchema = new Schema({
  saleId: {
    type: Schema.Types.ObjectId,
    ref: "Sale",
  },
  date: {
    type: Date,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
});

const CustomerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    company: {
      type: String,
    },
    notes: {
      type: String,
    },
    purchaseHistory: {
      type: [purchaseHistorySchema],
    },
  },
  { timestamps: true }
);

export const Customer = mongoose.model("Customer", CustomerSchema);
