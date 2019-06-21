import mongoose from 'mongoose';

import { objectIterate } from '$shared/utils';

export default schema => {
    schema.method('toClient', function() {
        const formatted = this.toObject();

        formatted.id = this._id.toString();

        delete formatted._id;
        delete formatted.__v;

        objectIterate(formatted, (object, key, value) => {
            if (value instanceof mongoose.Types.ObjectId) {
                object[key] = value.toString();
            }
        });

        return formatted;
    });
};
