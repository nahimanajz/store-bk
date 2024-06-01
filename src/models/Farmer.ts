import mongoose from "mongoose";

// Define the schema
const farmerSchema = new mongoose.Schema({
  Names: {
    type: String,
    required: true,
  },
  email:{
    required: true,
    type: String,
    unique:true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  deleteAt: {
    type: Date,
    default: null,
  },
});


export const Farmer = mongoose.model("Farmer", farmerSchema);


