import mongoose, { Schema, Document } from "mongoose";

const landSchema = new mongoose.Schema({
    farmerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Farmers',
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    deletedAt: {
      type: Date,
      default: null
    }
  });

 export const Land = mongoose.model('Land', landSchema);

