import mongoose from 'mongoose';

export default mongoose.Schema({
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
        unique: true
    },
    password: String
});
