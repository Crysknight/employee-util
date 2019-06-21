import mongoose from 'mongoose';

const employeeGroupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

export default mongoose.model('EmployeeGroup', employeeGroupSchema);
