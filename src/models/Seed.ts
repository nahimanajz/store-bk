
import mongoose, { Schema, Document } from 'mongoose';


const SeedSchema: Schema = new Schema({
    name: {
        type: String,
        required: false,  
    },
}, { timestamps: true });

export const Seed = mongoose.model('Seed', SeedSchema);
