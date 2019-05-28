const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    name: String,
    pwd: {
        type: String,
        required: true
    },
    token: String
});

module.exports = mongoose.model('User', userSchema);