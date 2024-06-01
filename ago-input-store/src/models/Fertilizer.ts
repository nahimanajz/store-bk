import mongoose, { Schema, Document } from "mongoose";

const FertilizerSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const Fertilizer = mongoose.model("Fertilizer", FertilizerSchema);
