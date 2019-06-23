import mongoose from 'mongoose';

import { StandardModel } from '$utils';

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    measuresGroups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MeasuresGroup'
    }],
    employeesGroups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EmployeesGroup'
    }]
});

export default new StandardModel('Measure', schema);
