import mongoose from 'mongoose';

const rateSchema = mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    measure: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Measure',
        required: true
    },
    value: {
        type: Number,
        required: true,
        min: 0,
        max: 10,
        default: 0
    }
});

export default mongoose.model('Rate', rateSchema);
