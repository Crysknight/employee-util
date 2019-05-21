const { Schema } = require('mongoose');
const connection = require('../connection');

const skillSchema = Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
});

module.exports = connection.model('Skill', skillSchema);
