import mongoose from 'mongoose';

const measureSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    measureGroups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MeasureGroup'
    }],
    employeeGroups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EmployeeGroup'
    }]
});

export default mongoose.model('Measure', measureSchema);
