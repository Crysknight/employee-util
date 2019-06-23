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
        ref: 'EmployeesGroup'
    }],
    statuses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EmployeesStatus'
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
