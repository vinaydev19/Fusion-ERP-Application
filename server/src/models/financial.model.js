import mongoose, { Schema } from "mongoose";

const financialScheme = new Schema(
  {
    transactionType: {
      type: String,
      enum: ["Income", "Expense"],
    },
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
    },
    category: {
      type: String,
      enum: ["Salary", "Rent", "Utilities"],
    },
    paymentMethod: {
      type: String,
      enum: ["Cash", "Bank Transfer"],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Financial = mongoose.model("Financial", financialScheme);
