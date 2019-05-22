const { Schema } = require('mongoose');
const connection = require('../connection');

module.exports = Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
});
