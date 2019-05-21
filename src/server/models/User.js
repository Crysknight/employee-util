const { Schema } = require('mongoose');
const connection = require('../connection');

const userSchema = Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    pwd: {
        type: String,
        required: true
    },
    token: String
});

module.exports = connection.model('User', userSchema);
