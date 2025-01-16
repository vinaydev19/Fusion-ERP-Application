import mongoose, { Schema } from "mongoose";

const employeeSchema = new Schema(
  {
    fullName: {
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
    position: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    dateOfJoining: {
      type: Date,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Active", "Inactive"],
    },
  },
  { timestamps: true }
);

export const Employee = mongoose.model("Employee", employeeSchema);
