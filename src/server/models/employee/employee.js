import mongoose from 'mongoose';

const { Schema } = mongoose;

const rateSubschema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    value: {
        type: Number,
        min: 0,
        max: 10
    }
});

const measureSubschema = Schema({
    measure: {
        type: Schema.Types.ObjectId,
        ref: 'Measure'
    },
    rates: [rateSubschema]
});

const employeeSchema = Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    isMentor: Boolean,
    avatar: {
        type: Schema.Types.ObjectId,
        ref: 'Avatar'
    },
    measures: [measureSubschema]
});

export default mongoose.model('Employee', employeeSchema);
