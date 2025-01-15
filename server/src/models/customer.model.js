import mongoose, { Schema } from "mongoose";

const CustomerSchema = new Schema({});

export const Customer = mongoose.model("Customer", CustomerSchema);
