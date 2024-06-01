
import mongoose, { Schema } from 'mongoose';

const InputStoreSchema: Schema = new Schema({
    amount: {
        type: Number,
        required: true
      },
      type: {
        type: String,
        enum: ['seed', 'fertilizer'],
        required : true
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      expirationDate: {
        type: Date,
        required: true
      }
    
}, { timestamps: true });;

export const InputStore = mongoose.model('InputStore', InputStoreSchema);
