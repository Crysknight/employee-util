const { Schema } = require('mongoose');
const connection = require('../connection');

module.exports = Schema({
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
