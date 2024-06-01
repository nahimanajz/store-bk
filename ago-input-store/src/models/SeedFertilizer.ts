
import mongoose, { Schema, Document, ObjectId } from 'mongoose';



const SeedSchema: Schema = new Schema({
    Name: {
        type: String,
        required: false,
    },
    SeedId:{
        type: Schema.Types.ObjectId,
        ref: 'Seed',
        required: true,
    },
    FertilizerId:{
         type: Schema.Types.ObjectId,
         ref: 'Fertilizer',
         required: true,
    }
}, { timestamps: true });;

export const SeedFertilizer = mongoose.model('SeedFertilizer', SeedSchema);
