import mongoose from 'mongoose';

import { StandardModel } from '$utils';

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    employeeGroups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EmployeeGroup'
    }]
});

export default new StandardModel('MeasureGroup', schema, 'measureGroup');
