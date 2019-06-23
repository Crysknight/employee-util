import mongoose from 'mongoose';

import { StandardModel } from '$utils';

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

export default new StandardModel('MeasuresGroup', schema, 'measuresGroup');
