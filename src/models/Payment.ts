
import mongoose, { Schema } from 'mongoose';

const PaymentSchema: Schema = new Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Order' 
      },
      paidAmount: {
        type: Number,
        required: true
      },
}, { timestamps: true });;

export const Order = mongoose.model('Payment', PaymentSchema);