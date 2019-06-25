import mongoose from 'mongoose';

import { stringRandom } from '$shared/utils';

import EmployeeModel from './model';

const schema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    employeeGroups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EmployeeGroup'
    }],
    employeeStatuses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EmployeeStatus'
    }],
    login: {
        type: String,
        unique: true,
        default: () => `user_${stringRandom()}`
    },
    avatar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Avatar'
    },
    password: String,
    token: String
});

export default new EmployeeModel('Employee', schema);
