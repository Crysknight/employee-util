import mongoose from 'mongoose';

const { Schema } = mongoose;

const skillSchema = Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
});

export default mongoose.model('Skill', skillSchema);
