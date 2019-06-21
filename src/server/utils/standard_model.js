import mongoose from 'mongoose';

import { objectIterate } from '$shared/utils';

export default class StandardModel {
    constructor(name, schema) {
        this.Model = mongoose.model(name, schema);
    }

    toClient(document) {
        const formatted = document.toObject();

        formatted.id = document._id.toString();

        delete formatted._id;
        delete formatted.__v;

        objectIterate(formatted, (object, key, value) => {
            if (value instanceof mongoose.Types.ObjectId) {
                object[key] = value.toString();
            }
        });

        return formatted;
    }

    async get(query) {
        const documents = await this.Model.find(query);

        return documents.map(document => {
            return this.toClient(document);
        });
    }

    async create(data) {
        const document = new this.Model(data);

        await document.save();

        return this.toClient(document);
    }

    async delete(ids) {
        const query = {
            _id: {
                $in: ids.map(id => mongoose.Types.ObjectId(id))
            }
        };

        await this.Model.deleteMany(query);
    }
};
