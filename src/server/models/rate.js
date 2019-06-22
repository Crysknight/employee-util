import mongoose from 'mongoose';

import { StandardModel } from '$utils';

const schema = mongoose.Schema({
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

export default new StandardModel('Rate', schema);
