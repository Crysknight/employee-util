import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

import { SERVER_PATH } from '$constants';

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

fileSchema.pre('remove', function(next) {
    const { path: filePath } = this;
    const fileAbsolutePath = path.join(SERVER_PATH, filePath);

    if (fs.existsSync(fileAbsolutePath)) {
        fs.unlinkSync(fileAbsolutePath);
    }

    next();
});

export default mongoose.model('File', fileSchema)
