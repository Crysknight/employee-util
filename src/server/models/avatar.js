const mongoose = require('mongoose');
const { Schema } = mongoose;
const File = require('./file');

const avatarSchema = Schema({
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    }
});

module.exports = File.discriminator('Avatar', avatarSchema);
