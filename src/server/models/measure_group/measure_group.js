import mongoose from 'mongoose';

const measureGroupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

export default mongoose.model('MeasureGroup', measureGroupSchema);
