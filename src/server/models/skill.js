const mongoose = require('mongoose');
const { Schema } = mongoose;

const skillSchema = Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
});

module.exports = mongoose.model('Skill', skillSchema);
