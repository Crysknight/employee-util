import mongoose from 'mongoose';

import { stringRandom } from '$shared/utils';

import EmployeeModel from './model';

const schema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    groups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EmployeeGroup'
    }],
    statuses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EmployeeStatus'
    }],
    login: {
        type: String,
        unique: true,
        default: () => `user_${stringRandom()}`
    },
    password: String,
    token: String
});

export default new EmployeeModel('Employee', schema);
