import mongoose, { Schema } from "mongoose";

const teamMemberSchema = new Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Employee",
  },
  role: {
    type: String,
    required: true,
  },
});

// const TaskSchema = new Schema({
//   taskId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: "Task",
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ["Pending", "Completed"],
//     required: true,
//   },
//   dueDate: {
//     type: Date,
//     required: true,
//   },
// });

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["Ongoing", "Completed", "Cancelled"],
    required: true,
  },
  teamMembers: [teamMemberSchema],
  budget: {
    type: Number,
    required: true,
  },
  //   tasks: [TaskSchema],
});

export const Project = mongoose.model("Project", projectSchema);
