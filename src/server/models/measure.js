import mongoose from 'mongoose';

import { StandardModel } from '$utils';

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    measureGroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MeasureGroup'
    },
    employeeGroups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EmployeeGroup'
    }]
});

export default new StandardModel('Measure', schema);
