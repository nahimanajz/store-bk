import mongoose, { Schema } from "mongoose";

const OrderSchema: Schema = new Schema(
  {
    farmerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Farmer",
    },
    seedId: {
      type: Schema.Types.ObjectId,
      ref: "Seed",
      required: true,
    },
    fertilizerId: {
      type: Schema.Types.ObjectId,
      ref: "Fertilizer",
      required: true,
    },
    orderStatus: {
      type: String,
      enum: ["rejected", "approved", "pending"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["partially paid", "fully paid","not paid"],
      default: "not paid",
    },
    payableAmount: {
      type: Number,
      required: true,
      default: 0,
    }
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", OrderSchema);
