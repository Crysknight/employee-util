import mongoose from 'mongoose';

const { Schema } = mongoose;

const measureSchema = Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
});

export default mongoose.model('Measure', measureSchema);
