import mongoose from 'mongoose';
import File from './file';

const { Schema } = mongoose;

const avatarSchema = Schema({
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    }
});

export default File.discriminator('Avatar', avatarSchema);
