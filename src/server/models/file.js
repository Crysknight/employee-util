const mongoose = require('mongoose');
const { Schema } = mongoose;

const fileSchema = Schema({
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    size: Number,
    uploadDate: {
        type: Number,
        default() {
            return new Date().getTime();
        }
    }
}, { discriminatorKey: 'type' });

module.exports = mongoose.model('File', fileSchema)
